import'../styles/globals.css'
import { Global, css } from '@emotion/react'
import { ThemeProvider } from 'theme-ui'
import theme  from '../theme'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
      @font-face{
        font-family:"CoveredGrace";
        src: url('../font/CoveredByYourGrace-Regular.ttf');
      }
      @font-face{
        font-family:"Roboto";
        src: url('../font/RobotoCondensed-Light.ttf');
      }
      `}
    />
      <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
