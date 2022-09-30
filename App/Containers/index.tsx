import React from 'react'
import { Provider } from 'react-redux'

// Store
import store from '@/Store'

// Navigation
import AppNavigation from '@/Navigation/AppNavigation'
import { I18nextProvider } from 'react-i18next'

import i18init from '@/Languages'

const index = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18init}>
        <AppNavigation />
      </I18nextProvider>
    </Provider>
  )
}

export default index
