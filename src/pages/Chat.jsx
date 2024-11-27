import { useRef, useState } from "react";
import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat({displayOfChat, textOfFirstQuestion}){
    const inputUserRef = useRef(null)

        const [cardChat, setCardChat] = useState([])

    const handleButtonClick = () => {
        const message = inputUserRef.current.value;

        if(message){
            setCardChat((question) => [
                ...question,
                {text: message, type: 'question'}
            ])
            inputUserRef.current.value = ''
        }
    }

    return(
        <div style={{display: displayOfChat === true ? 'block' : 'none'}}>
            <div className="box-of-chat">
                <CardChat textOfCard={textOfFirstQuestion} typeCard={'question'}/>
                {cardChat.map((card) => {
                    return <CardChat textOfCard={card.text} typeCard={card.type} key={card.text}/>
                })}
            </div>
            <Search placeholder={'Posso ajudar em algo mais?...'} reference={inputUserRef} functionOfButton={handleButtonClick}/>
        </div>
    )
}
