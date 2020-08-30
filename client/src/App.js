import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { FileConfig, FileResults } from './components/components';
import { configurations } from 'utilities/utilities';

function App() {
  const [t, i18n] = useTranslation('default')
  const [downloadLink, setDownloadLink] = useState(false)
  const onGenerateDownloadLink = (showDownloadLink) => setDownloadLink(showDownloadLink)

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  return (
    <div className="app">
      <header>
        <h1>{t('app.title')}</h1>
        {i18n.language === 'fr' ? <button onClick={() => changeLanguage('en')}>{configurations.languages.english}</button> : <button onClick={() => changeLanguage('fr')}>{configurations.languages.french}</button>}
      </header>
      <main>
        <FileConfig onGenerateDownloadLink={onGenerateDownloadLink}></FileConfig>
        <FileResults showDownloadLink={downloadLink}></FileResults>
      </main>
      <footer>
        {t('app.credits', { author: 'Chelny Duplan' })}
      </footer>
    </div>
  );
}

export default App;
