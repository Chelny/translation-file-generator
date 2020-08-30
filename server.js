'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const XLSX = require('xlsx');
const archiver = require('archiver');
const fs = require('fs');
const streamBuffers = require('stream-buffers');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'client/public')));

const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

const outputStreamBuffer = new streamBuffers.WritableStreamBuffer({
  initialSize: (1000 * 1024),     // start at 1000 kilobytes
  incrementAmount: (1000 * 1024)  // grow by 1000 kilobytes each time buffer overflows
});

const zipFilename = 'translations.zip';
const zipFilePath = path.join(__dirname, 'client/public/tmp', zipFilename)

const promises = (filesContent) => {
  return Object.entries(filesContent).map(([filename, content]) => {
    archive.append(JSON.stringify(content, null, 4), { name: filename });

    return new Promise((resolve, reject) => {
      console.log(`${filename} has been generated...`);
      resolve();
    });
  });
};

app.post('/api/file/read', (req, res) => {
  const readedData = XLSX.read(req.body.fileData, { type: 'binary' })
  const wsname = readedData.SheetNames[0]
  const ws = readedData.Sheets[wsname]
  const dataParse = XLSX.utils.sheet_to_json(ws, {
    blankrows: false,
    defval: '',
    header: 1,
    raw: false
  })

  res.send({ data: dataParse });
});

app.post('/api/file/generate', (req, res) => {
  const filesContent = req.body.filesContent;

  archive.pipe(outputStreamBuffer);

  Promise.all(promises(filesContent)).then(_ => {
    archive.finalize();
  }).catch(err => {
    console.error(err);
  });

  archive.on('error', (err) => {
    console.error(err);
  });

  archive.on('finish', (err) => {
    if (err) return console.error(err);
    outputStreamBuffer.end();
  });

  outputStreamBuffer.on('finish', () => {
    fs.writeFile(zipFilePath, outputStreamBuffer.getContents(), (err) => {
      if (err) return console.error(err);
      console.log('translations.zip has been created and ready to be downloaded!');
      res.send({ showDownloadLink: true });
    });
  });
});

app.get('/api/file/download', (req, res) => {
  res.download(zipFilePath, (err) => {
    if (err) return console.error(err);
    fs.unlinkSync(zipFilePath);
  });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
