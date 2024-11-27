import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import { useRef, useState } from 'react'

function Index() {
  const displayOfInitialChat = useRef(null)
  const [displayOfChat, setDisplayOfChat] = useState(false)
  const inputInitialOfUser = useRef(null)
  const [firstQuestion, setFirstQuestion] = useState('')

  function inputMensage() {
    const firstMensage = inputInitialOfUser.current.value

    if(firstMensage != ''){
      setFirstQuestion(firstMensage)
      displayOfInitialChat.current.style.display = 'none'
      setDisplayOfChat(true)
    }
  }
  return (
    <div className='box'>
      <div className="container-main" ref={displayOfInitialChat}>
        <div className='container-secundary'>
          <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
          <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
        </div> 
        <Search reference={inputInitialOfUser} placeholder={"O que gostaria de treinar?"} functionOfButton={inputMensage}/>
      </div>
      <Chat displayOfChat={displayOfChat} textOfFirstQuestion={firstQuestion}/>
    </div>
  )
}

export default Index
