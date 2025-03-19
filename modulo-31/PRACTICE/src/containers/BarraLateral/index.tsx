import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroContact from '../../components/FiltroContact'

import { RootReducer } from '../../store'
import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TiposDeContatos'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <S.Filtros>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroContact
                valor={enums.TipoDeContato.AMIGOS}
                legenda="Amigos"
              />
              <FiltroContact
                valor={enums.TipoDeContato.TRABALHO}
                legenda="Trabalho"
              />
              <FiltroContact
                valor={enums.TipoDeContato.FAMILIA}
                legenda="Família"
              />
              <FiltroContact
                valor={enums.TipoDeContato.OUTROS}
                legenda="Outros"
              />
              <FiltroContact
                valor={enums.TipoDeContato.TODOS}
                legenda="Todos"
              />
            </S.Filtros>
          </S.Filtros>
        </>
      ) : (
        <S.Botao onClick={() => navigate('/')}>Voltar aos contatos</S.Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
