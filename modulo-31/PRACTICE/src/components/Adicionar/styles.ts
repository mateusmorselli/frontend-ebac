import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circulo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  height: 64px;
  width: 64px;
  bottom: 40px;
  left: 90px;
  position: fixed;
  background-color: #fff;
  border-radius: 50%;
  font-size: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: transparent;
    border: 3px solid #fff;
    color: #fff;
  }
`
