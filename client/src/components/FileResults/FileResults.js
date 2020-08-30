import React from 'react'
import { useTranslation } from 'react-i18next'
// import { configurations } from 'utilities/utilities'

function FileResults({ showDownloadLink }) {
  const [t] = useTranslation('default')

  return (
    <section className="file__results">
      {showDownloadLink ? [
        <div>
          {t('fileResults.downloadText')} <a href="http://localhost:5000/api/file/download">{t('fileResults.downloadLink')}</a>
        </div>,
        // <span className="hint">
        //   {t('fileResults.downloadInstruction', { time: configurations.downloadLinkMaxTime })}
        // </span>
      ] : null}
    </section>
  )
}

export default FileResults
