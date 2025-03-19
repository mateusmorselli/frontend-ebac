import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Titulo, Campo, Form, Opcao } from './styles'
import * as enums from '../../utils/enums/TiposDeContatos'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipo, setTipo] = useState(enums.TipoDeContato.AMIGOS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        tipo
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Titulo>Novo cadastro</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="number"
          placeholder="Telefone"
        />

        <div className="radio-group">
          <p>Tipo de Contato</p>
          <div className="radio-options">
            {Object.values(enums.TipoDeContato)
              .filter((tipo) => tipo !== enums.TipoDeContato.TODOS) // Filtra para remover "TODOS"
              .map((tipo) => (
                <Opcao key={tipo}>
                  <Campo
                    value={tipo}
                    name="tipo"
                    type="radio"
                    id={tipo}
                    onChange={(evento) =>
                      setTipo(evento.target.value as enums.TipoDeContato)
                    }
                  />
                  <label htmlFor={tipo}>{tipo}</label>
                </Opcao>
              ))}
          </div>
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  )
}

export default Formulario
