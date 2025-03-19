import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/TiposDeContatos'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )
    }

    if (valor !== enums.TipoDeContato.TODOS) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.tipo === valor
      )
    }

    return contatosFiltrados
  }

  const contatos = filtraContatos()
  const totalContatos = itens.length

  return (
    <S.Main>
      <S.Tag>{valor}</S.Tag>
      <p>
        Exibindo {contatos.length} de {totalContatos} contatos
      </p>
      <p>
        {termo !== undefined && termo.length > 0
          ? `Pesquisando por: ${termo}`
          : ''}
      </p>
      <S.List>
        {contatos.map((m) => (
          <li key={m.nome}>
            <Contato
              tipo={m.tipo}
              nome={m.nome}
              email={m.email}
              telefone={m.telefone}
              id={m.id}
            />
          </li>
        ))}
      </S.List>
    </S.Main>
  )
}

export default ListaDeContatos
