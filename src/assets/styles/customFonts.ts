import { createGlobalStyle } from 'styled-components'

import PTSansRegular from '../fonts/PTSans-Regular.woff2'
import PTSansBold from '../fonts/PTSans-Bold.woff2'
import BebasNeueRegular from '../fonts/BebasNeue-Regular.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'PT Sans';
    src: url(${PTSansRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'PT Sans';
    src: url(${PTSansBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeueRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
`
