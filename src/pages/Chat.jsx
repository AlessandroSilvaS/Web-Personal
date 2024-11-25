import { useRef, useState } from "react";
import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat({displayOfChat, textOfFirstQuestion}){

    const inputUserRef = useRef(null)

    const handleButtonClick = () => {
        console.log(inputUserRef.current.value)
    }

    return(
        <div style={{display: displayOfChat}}>
            <div className="box-of-chat">
                <CardChat textOfCard={textOfFirstQuestion} typeCard={'question'}/>
            </div>
            <Search placeholder={'Posso ajudar em algo mais?...'} reference={inputUserRef} functionOfButton={handleButtonClick}/>
        </div>
    )
}
