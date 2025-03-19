import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TiposDeContatos'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  valor?: enums.TipoDeContato
}

const FiltroContact = ({ legenda, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoValor = filtro.valor === valor
    return mesmoValor
  }

  const contarTarefas = () => {
    if (valor === enums.TipoDeContato.TODOS) {
      return contatos.itens.length
    }
    return contatos.itens.filter((item) => item.tipo === valor).length
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Label>{contador}</S.Label>
      <S.Contador>{legenda}</S.Contador>
    </S.Card>
  )
}

export default FiltroContact
