import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import { useRef, useState } from 'react'

function Index() {
  const displayOfInitialChat = useRef(null)
  const inputUser = useRef(null)
  const [displayOfChat, setDisplayOfChat] = useState('none')
  const [inputMesage, setInputMessage] = useState('')

  async function hideDisplayInitialChat(){

    const valueInput = inputUser.current.value
    if(valueInput){
      await setInputMessage(valueInput)
      displayOfInitialChat.current.style.display = 'none'
      setDisplayOfChat('block')
      console.log('sucess')
    }else{
      window.alert("Por favor, digite um prompt válido...")
      console.log('error')
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
