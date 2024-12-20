import '../style/index.css'
import { Chat } from './Chat.jsx'
import { Search } from '../components/Search.jsx'
import SugestionCards from '../components/SugestionCards.jsx'
import { useRef, useState } from 'react'
import SugestionsData from '../data/SugestionsData.json'

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
    }else{
      window.alert('Por favor, insira um prompt válido!')
    }
  }

  function inputSugestionMensage(workout){
    const promptWorkout = `Create a workout for ${workout}`
    setFirstQuestion(promptWorkout)
    displayOfInitialChat.current.style.display = 'none'
    setDisplayOfChat(true)
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      inputMensage()
    }
  })

  const showSugestionsCards = () =>{
    const sugestionsCardArray = []
    const usedIndex = new Set()

    while(sugestionsCardArray.length < 4) {
      const indexNumber = Math.floor(Math.random() * SugestionsData.length)

      if(!usedIndex.has(indexNumber)){

        usedIndex.add(indexNumber)
        sugestionsCardArray.push(<SugestionCards sugestion={SugestionsData[indexNumber].Sugestion} buttonFunction={() => inputSugestionMensage(SugestionsData[indexNumber].Sugestion)}/>)
      }
    }

    return sugestionsCardArray
  }

  return (
    <div className='box'>
      <div className="container-main" ref={displayOfInitialChat}>
        <div className='container-secundary'>
          <img className='fotoAvatar' src='src/images/avatarRD.jpeg' alt='Not found'/>
          <h1 className='welcome-text'>Ready to take care of your health?</h1>
        </div> 
        <Search reference={inputInitialOfUser} placeholder={"What would you like to train?"} functionOfButton={inputMensage}/>
        <p style={{margin: '10px', color: '#a7a2a2'}}>Workout suggestions.</p>
        <div className="boxs-of-sugestions" style={{display: 'flex', justifyContent: 'space-evenly', gap: '20px', width: '50%', margin: '0 auto', marginTop: '15px'}}>
          {showSugestionsCards()}
        </div>
      </div>
      <Chat displayOfChat={displayOfChat} textOfFirstQuestion={firstQuestion}/>
    </div>
  )
}
export default Index
