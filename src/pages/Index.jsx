import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import { useRef, useState } from 'react'

function Index() {
  const displayOfInitialChat = useRef(null)
  const inputUser = useRef(null)
  const [displayOfChat, setDisplayOfChat] = useState('none')
  const [inputMesage, setInputMessage] = useState('')

  function hideDisplayInitialChat(){

    const valueInput = inputUser.current.value

    if(valueInput !== null){
      displayOfInitialChat.current.style.display = 'none'
      setDisplayOfChat('block')
      setInputMessage(valueInput)
      
    }else{
      window.alert("Por favor, digite um prompt válido...")
    }
  }

  return (
    <div className='box'>
        <div className="container-main" ref={displayOfInitialChat}>
          <div className='container-secundary'>
            <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
            <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
          </div> 
          <Search reference={inputUser} placeholder={"O que gostaria de treinar?"} functionOfButton={hideDisplayInitialChat}/>
        </div>
      <Chat displayOfChat={displayOfChat} textOfFirstQuestion={inputMesage}/>
    </div>
  )
}
export default Index
