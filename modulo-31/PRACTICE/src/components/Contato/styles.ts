import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/TiposDeContatos'

type TipoProps = {
  tipo: enums.TipoDeContato
}

function retornaCor(props: TipoProps): string {
  const cores: Record<enums.TipoDeContato, string> = {
    [enums.TipoDeContato.AMIGOS]: variaveis.amigos,
    [enums.TipoDeContato.TRABALHO]: variaveis.trabalho,
    [enums.TipoDeContato.FAMILIA]: variaveis.familia,
    [enums.TipoDeContato.OUTROS]: variaveis.outros,
    [enums.TipoDeContato.TODOS]: '#000000'
  }

  return cores[props.tipo] || '#000000'
}

export const Card = styled.div`
  background-color: rgb(38, 39, 44);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px 0px 16px;
  width: 240px;
  height: 248px;
  margin: 32px;
`

export const Nome = styled.h3<TipoProps>`
  font-size: 18px;
  font-weight: bold;
  border-left: 8px solid ${(props) => retornaCor(props)};
  color: #fff;
  text-align: center;
  margin-bottom: 32px;
`
export const Email = styled.textarea`
  background-color: transparent;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  resize: none;
  border: none;
  padding: 8px;
`
export const Telefone = styled.textarea`
  padding: 8px;
  background-color: transparent;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  display: block;
  width: 100%;
  margin-bottom: 24px;
  resize: none;
  border: none;
`

export const Acoes = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  padding-top: 8px;
`

export const Botao = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  color: ${variaveis.salvar};
  &:hover {
    color: #66BB6A);
  }
`

export const BotaoEditar = styled(Botao)`
  color: ${variaveis.editar};
  &:hover {
    color: #357abd;
  }
`

export const BotaoCancelar = styled(Botao)`
  color: ${variaveis.cancelar};
  &:hover {
    color: #a9a9a9;
  }
`

export const BotaoRemover = styled(Botao)`
  color: ${variaveis.remover};
  &:hover {
    color: #e02a2a;
  }
`
