import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import { useRef, useState, useEffect } from 'react'

function Index() {
  const displayOfInitialChat = useRef(null)
  const [displayOfChat, setDisplayOfChat] = useState(false)

  const inputInitialOfUser = useRef(null)
  const [firstQuestion, setFirstQuestion] = useState('')

  useEffect(() => {
    if(firstQuestion !== ''){
      displayOfInitialChat.current.style.display = 'none'
      setDisplayOfChat(true)
    } 
  }, [firstQuestion])

  function hideDisplayInitialChat(){

    if(inputInitialOfUser.current.value === null || inputInitialOfUser.current.value === ''){
      window.alert("Por favor, insira um prompt válido!")

    }else {
      setFirstQuestion(inputInitialOfUser.current.value)
    }
  }

  return (
    <div className='box'>
        <div className="container-main" ref={displayOfInitialChat}>
          <div className='container-secundary'>
            <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
            <h1 className='welcome-text'>Pronto para cuidar da saúde?</h1>
          </div> 
          <Search reference={inputInitialOfUser} placeholder={"O que gostaria de treinar?"} functionOfButton={hideDisplayInitialChat}/>
        </div>
      <Chat displayOfChat={displayOfChat} textOfFirstQuestion={firstQuestion}/>
    </div>
  )
}
export default Index
