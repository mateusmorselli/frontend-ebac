import { styled } from 'styled-components'

type Props = {
  ativo?: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#000000' : '#fff')};
  background-color: ${(props) =>
    props.ativo
      ? 'rgb(240, 240, 240)'
      : 'rgb(42, 41, 49)'}; /* Fundo mais claro quando ativo */
  display: flex;
  color: ${(props) => (props.ativo ? '#000000' : '#fff')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size 24px;
`

export const Label = styled.span`
  font-size: 14px;
`
