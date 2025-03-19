import * as enums from '../utils/enums/TiposDeContatos'

class Contato {
  nome: string
  email: string
  telefone: string
  tipo: enums.TipoDeContato
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    tipo: enums.TipoDeContato,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.tipo = tipo
    this.id = id
  }
}

export default Contato
