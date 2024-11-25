import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import { useRef, useState } from 'react'

function Index() {
  const displayOfInitialChat = useRef(null)
  const inputUserRef = useRef(null)
  const [displayOfChat, setDisplayOfChat] = useState('none')
  const [initialMensageUser, setInitialMensageUser] = useState('')

  function hideDisplayInitialChat(){
    setDisplayOfChat('block')
    displayOfInitialChat.current.style.display = 'none'
    setInitialMensageUser(inputUserRef.current.value)
  }

  return (
    <div className='box'>
        <div className="container-main" ref={displayOfInitialChat}>
          <div className='container-secundary'>
            <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
            <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
          </div> 
          <Search reference={inputUserRef} placeholder={"O que gostaria de treinar?"} functionOfButton={hideDisplayInitialChat}/>
        </div>
      <Chat displayOfChat={displayOfChat} textOfFirstQuestion={initialMensageUser}/>
    </div>
  )
}

export default Index
