import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'
import locale_eng from './translations/eng.json'
import locale_fra from './translations/fra.json'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import * as serviceWorker from './serviceWorker'

i18next
  .use(detector)
  .init({
    fallbackLng: ['en', 'fr'],
    debug: false,
    interpolation: { escapeValue: false },  // React already does escaping
    resources: {
      en: {
        default: locale_eng                 // 'default' is our custom namespace
      },
      fr: {
        default: locale_fra
      },
    }
  })

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
