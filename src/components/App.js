import React from 'react'
import { Normalize } from 'styled-normalize'
import GlobalStyle from '../styles/GlobalStyle'
import Header from '../components/Header'

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Header />
    </>
  )
}

export default App
