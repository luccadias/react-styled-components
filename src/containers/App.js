import React from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styled/global'
import * as themes from '../styled/themes'

import Board from './Board/index'

function App() {

  return (
    <ThemeProvider theme={themes.lightTheme}>
      <Board />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
