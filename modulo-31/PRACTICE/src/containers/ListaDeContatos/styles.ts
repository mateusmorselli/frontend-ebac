import styled from 'styled-components'

export const Main = styled.main`
  background-color: rgb(28, 27, 33);
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  color: #fff;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const Tag = styled.h1`
  &::first-letter {
    text-transform: uppercase;
  }
`
