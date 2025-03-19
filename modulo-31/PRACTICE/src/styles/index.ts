import { createGlobalStyle, styled } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Montserrat", sans-serif;
    }
`

export const Containter = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`

export default EstiloGlobal
