import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  tipo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Nome tipo={tipo}>{nome}</S.Nome>
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Acoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    telefone,
                    email,
                    id,
                    nome,
                    tipo
                  })
                )
                setEstaEditando(false)
              }}
            >
              <i className="fa-solid fa-floppy-disk"></i>
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>
              <i className="fa-solid fa-xmark"></i>
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </S.BotaoEditar>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              <i className="fa-solid fa-trash"></i>
            </S.BotaoRemover>
          </>
        )}
      </S.Acoes>
    </S.Card>
  )
}

export default Contato
