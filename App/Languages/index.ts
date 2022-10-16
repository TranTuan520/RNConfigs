import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

// Languages source
import localesResources from './locales'

i18next
  .use({
    type: 'languageDetector',
    async: true,
    detect: (callback: any) =>
      callback(RNLocalize.getLocales()[0].languageCode),
    init: () => {},
    cacheUserLanguage: () => {}
  })
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: localesResources
  })

export default i18next
