import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'

//condição com base no lenth dos textos

function Index() {
  return (
    <div className='box'>
      <div className="container-main">
        <div className='container-secundary'>
          <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
          <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
        </div>  
        <Search placeholder={"O que gostaria de treinar?"}/>
        {/* <Chat/> */}
      </div>
    </div>
  )
}
export default Index
