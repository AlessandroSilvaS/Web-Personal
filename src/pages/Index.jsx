import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'

const welcomeTexts = ["Pronto para cuidar da saude?", "Seja bem vindo a uma vida nova!", "Como posso ajudar seu bem-estar hoje?", "Pronto para melhorar sua vida?", "teste teste"]

//condição com base no lenth dos textos

function Index() {
  return (
    <div className='box'>
      <div className="container-main">
        {/* <div className='container-secundary'>
          <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
          <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
        </div>  
        <Search/> */}
        <Chat/>
      </div>
    </div>
  )
}
export default Index
