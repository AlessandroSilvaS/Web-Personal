import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import { useRef, useState } from 'react'

function Index() {
  const displayOfInitialChat = useRef(null)
  const [displayOfChat, setDisplayOfChat] = useState('none')

  const hideDisplayInitialChat = () => {
    setDisplayOfChat('block')
    return displayOfInitialChat.current.style.display = 'none'
  }

  return (
    <div className='box'>
        <div className="container-main" ref={displayOfInitialChat}>
          <div className='container-secundary'>
            <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
            <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
          </div> 
          <Search placeholder={"O que gostaria de treinar?"} functionOfButton={hideDisplayInitialChat}/>
        </div>
      <Chat displayOfChat={displayOfChat}/>
    </div>
  )
}

export default Index
