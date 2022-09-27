import React from 'react'
import { Provider } from 'react-redux'

// Store
import store from '@/Store'

// Navigation
import AppNavigation from '@/Navigation/AppNavigation'

const index = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default index
