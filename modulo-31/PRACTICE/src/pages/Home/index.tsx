import BotaoAdicionar from '../../components/Adicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeContatos />
      <BotaoAdicionar />
    </>
  )
}

export default Home
