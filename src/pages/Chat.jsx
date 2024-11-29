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

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
          handleButtonClick()
        }
      })

    return(
        <div style={{display: displayOfChat === true ? 'block' : 'none'}}>
            <div className="box-of-chat">
                <CardChat textOfCard={textOfFirstQuestion} typeCard={'question'}/>
                <CardChat textOfCard={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti non animi quam quod totam sed modi a voluptatum reiciendis cum voluptates consequuntur commodi, aperiam laudantium libero natus facilis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti non animi quam quod totam sed modi a voluptatum reiciendis cum voluptates consequuntur commodi, aperiam laudantium libero natus facilis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti non animi quam quod totam sed modi a voluptatum reiciendis cum voluptates consequuntur commodi, aperiam laudantium libero natus facilis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti non animi quam quod totam sed modi a voluptatum reiciendis cum voluptates consequuntur commodi, aperiam laudantium libero natus facilis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti non animi quam quod totam sed modi a voluptatum reiciendis cum voluptates consequuntur commodi, aperiam laudantium libero natus facilis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti non animi quam quod totam sed modi a voluptatum reiciendis cum voluptates consequuntur commodi, aperiam laudantium libero natus facilis in!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet del'} typeCard={'response'}/>

                {cardChat.map((card) => {
                    return <CardChat textOfCard={card.text} typeCard={card.type} key={card.text}/>
                })}
            </div>
            <Search placeholder={'Posso ajudar em algo mais?...'} reference={inputUserRef} functionOfButton={handleButtonClick}/>
        </div>
    )
}
