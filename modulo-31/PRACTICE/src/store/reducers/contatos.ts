import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/TiposDeContatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Mateus Morselli',
      email: 'matmorselli@gmail.com',
      telefone: '44991172022',
      tipo: enums.TipoDeContato.FAMILIA
    },
    {
      id: 2,
      nome: 'Joao Morselli',
      email: 'jmorselli@gmail.com',
      telefone: '44991172022',
      tipo: enums.TipoDeContato.TRABALHO
    },
    {
      id: 3,
      nome: 'Corinthians da Silva',
      email: 'corinthians@gmail.com',
      telefone: '44991172022',
      tipo: enums.TipoDeContato.AMIGOS
    },
    {
      id: 4,
      nome: 'Palmeiras da Silva',
      email: 'palmeirax@gmail.com',
      telefone: '44991172022',
      tipo: enums.TipoDeContato.OUTROS
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const nomeJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (nomeJaExiste) {
        alert('Este nome já está cadastrado!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
