import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components/native'

import themes from '~/assets/themes'

import Routes from '~/routes'

export default function App() {
  const [theme] = useState(themes.light)

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
