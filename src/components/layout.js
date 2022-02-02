/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  
  body {
    font-family: "Outfit", sans-serif;
    font-weight: normal;
    word-break: break-word;
    font-kerning: normal;
    background: ${p => p.theme.colours.gray}
  }
  
`

const theme = {
  colours: {
    gray: "hsl(212, 45%, 89%)",
    blue: "hsl(220, 15%, 55%)",
    darkBlue: "hsl(218, 44%, 22%)",
    white: "hsl(0, 0%, 100%)",
  },
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
