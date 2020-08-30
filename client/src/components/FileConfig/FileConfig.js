import React, { useState, useRef, createRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from 'components/Templates/templates'
import { configurations, validators } from 'utilities/utilities'

function FileConfig(props) {
  const [t] = useTranslation('default')
  const fileExtensions = configurations.allowedFileExts
  const langCodesMap = Object.assign({ keyName: [] }, configurations.langCodes)
  const langCodes = Object.entries(langCodesMap)
  const selectFileRef = useRef(null)
  const mappingRefs = new Map()
  langCodes.forEach(([key, value]) => mappingRefs.set(key, { refCheckbox: createRef(), refColumn: createRef() }))
  const [file, setFile] = useState(null)
  const [fileContent, setFileContent] = useState([])
  const [mapping, setMapping] = useState({
    keyName: { checked: true, columnId: null },
    eng: { checked: true, columnId: null },
    fre: { checked: true, columnId: null },
    ger: { checked: false, columnId: null },
    ita: { checked: false, columnId: null },
    por: { checked: false, columnId: null },
    rus: { checked: false, columnId: null },
    spa: { checked: false, columnId: null }
  })
  const [filename, setFilename] = useState(configurations.filename)
  const [iso6391Code, setISO6391Code] = useState(false)
  const [formValid, setFormValid] = useState(true)

  const selectFile = () => selectFileRef.current.click()

  const onFileChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = async (e) => {
        const response = await fetch('/api/file/read', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fileData: e.target.result }),
        })

        const body = await response.json()
        setFileContent(body.data)
      }

      reader.readAsBinaryString(file)
      setFile(file)
    }
  }

  const activeTranslation = (key) => Object.entries(mapping)
    .find(([lang, { checked, columnId }]) => lang === key && checked)

  const onToggleLanguage = (key, checked = true) => {
    mappingRefs.get(key).refColumn.current.disabled = !checked
    setMapping((prevState) => ({ ...prevState, [key]: { checked, columnId: mappingRefs.get(key).refColumn.current.value } }))
  }

  const onFilenameChange = (e) => setFilename(e.target.value)

  const onFilenameBlur = (e) => {
    if (filename.length === 0) setFilename(configurations.filename)
  }

  const onToggleISOCode = (checked) => setISO6391Code(checked)

  const validForm = (e) => {
    const inputsNodeList = e.target.querySelectorAll('input, select')
    const inputsValidity = Array.from(inputsNodeList)
      .filter(input => input.type !== 'checkbox')
      .map(input => validators.validate(input))

    setFormValid(inputsValidity.every(valid => valid))

    if (formValid) return true
  }

  const generateFile = async (e) => {
    e.preventDefault()

    const filesContent = {}
    let keyNameCol = null

    if (!validForm(e)) return

    Object.entries(mapping)
      .filter(([lang, { checked, columnId }]) => checked)
      .forEach(([lang, { checked, columnId }], index) => {
        if (index === 0) keyNameCol = columnId
        if (Object.keys(configurations.langCodes).includes(lang)) {
          const langCodes = configurations.langCodes[lang]
          const langCode = iso6391Code ? langCodes[1] : langCodes[0]

          // Set language code in filename based on user's selection
          const fname = `${filename.replace(/{lang}/gi, langCode)}.json`

          filesContent[fname] = {}

          // Create json content
          for (let row = 1; row < fileContent.length; row++) {
            for (let col = 1; col < fileContent[row].length; col++) {
              const jsonKeyName = fileContent[row][keyNameCol]
              const jsonValue = fileContent[row][columnId] || `${langCode.toUpperCase()} — ${jsonKeyName}`
              filesContent[fname] = { ...filesContent[fname], [jsonKeyName]: jsonValue }
            }
          }

          // Sort json keys in ascending order
          filesContent[fname] = Object.keys(filesContent[fname])
            .sort()
            .reduce((acc, key) => ({
              ...acc, [key]: filesContent[fname][key]
            }), {})
        }
      })

    const response = await fetch('/api/file/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filesContent }),
    })

    const body = await response.json()
    props.onGenerateDownloadLink(body.showDownloadLink)
  }

  return (
    <section className="file__config">
      <form onSubmit={generateFile} noValidate>
        <section className="step__selectFile--current">
          <input type="file" name="file" accept={fileExtensions}
            onChange={onFileChange} ref={selectFileRef} required />
          <button type="button" className={file ? 'select__file--valid' : 'select__file'}
            id="selectFile" onClick={selectFile}>
            {file ? file.name : t('fileConfig.selectFile')}
          </button>
          <span className="hint">{t('fileConfig.selectFileHint')}</span>

          <small>
            <span>{t('fileConfig.exampleFile')}</span> <a href="files/translations.csv">{t('fileConfig.exampleFileCSV')}</a> <a href="files/translations.xlsx">{t('fileConfig.exampleFileExcel')}</a>
          </small>
        </section>

        <section className="step__mapping">
          <h3>{t('fileConfig.availableLanguages')}</h3>
          <span className="hint">{t('fileConfig.availableLanguagesInstructions')}</span>

          {langCodes.map(([key, langCode], index) => <div className="row" key={index}>
            <div className="col">
              {index !== 0 && <ToggleSwitch id="mapping" checked={activeTranslation(key)} onToggle={checked => onToggleLanguage(key, checked)} ref={mappingRefs.get(key).refCheckbox} />}
            </div>
            <div className={activeTranslation(key) ? 'col' : 'col deactivated'}>
              {t(`configs.langCodes.${key}`)}
            </div>
            <div className="col">
              <select name={`mapColumn${index}`} disabled={!activeTranslation(key)} onChange={() => onToggleLanguage(key)} ref={mappingRefs.get(key).refColumn} required={activeTranslation(key)}>
                <option></option>
                {fileContent[0]?.map((value, index) => value && <option key={index} value={index}>
                  {value}
                </option>)}
              </select>
            </div>
          </div>)}
        </section>

        <section className="step__setFilename">
          <h3>{t('fileConfig.filename')}</h3>
          <span className="hint">{t('fileConfig.filenameInstructions')}</span>

          <div className="filename-name">
            <div className="input-group">
              <input type="text" name="filename"
                placeholder={configurations.filename} defaultValue={configurations.filename}
                value={filename}
                onInput={onFilenameChange} onBlur={onFilenameBlur} requried />
              <span>.json</span>
            </div>
          </div>

          <div className="filename-lang-code">
            <ToggleSwitch id="ISO639-1Code" label={t('fileConfig.isoCodePlaceholder')} onToggle={onToggleISOCode} />
          </div>

          <div className="filename-preview">
            {filename && `${filename.replace(/{lang}/gi, iso6391Code ? 'en' : 'eng')}.json`}
          </div>
        </section>

        <section className="step__generateFile">
          <button type="submit">
            {t('fileConfig.generateFile')}
          </button>

          {!formValid && <span className="error">{t('fileConfig.formErrorMsg')}</span>}
        </section>
      </form>
    </section>
  )
}

export default FileConfig
