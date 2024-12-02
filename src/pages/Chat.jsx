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
                <CardChat textOfCard={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae aliquid sunt. Tenetur accusantium maiores repellat optio, cum possimus? Maxime blanditiis molestiae quam officiis fuga accusamus similique a tenetur exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus vitae laboriosam architecto aperiam, odit dolore nemo similique vero quae, neque assumenda aut sint eligendi nam! Odit repellat obcaecati quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta deleniti tempora nihil rerum perspiciatis, ipsa, explicabo error rem harum dolores placeat quis officiis, nobis sed vel reiciendis possimus obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae aliquid sunt. Tenetur accusantium maiores repellat optio, cum possimus? Maxime blanditiis molestiae quam officiis fuga accusamus similique a tenetur exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus vitae laboriosam architecto aperiam, odit dolore nemo similique vero quae, neque assumenda aut sint eligendi nam! Odit repellat obcaecati quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta deleniti tempora nihil rerum perspiciatis, ipsa, explicabo error rem harum dolores placeat quis officiis, nobis sed vel reiciendis possimus obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae aliquid sunt. Tenetur accusantium maiores repellat optio, cum possimus? Maxime blanditiis molestiae quam officiis fuga accusamus similique a tenetur exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus vitae laboriosam architecto aperiam, odit dolore nemo similique vero quae, neque assumenda aut sint eligendi nam! Odit repellat obcaecati quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta deleniti tempora nihil rerum perspiciatis, ipsa, explicabo error rem harum dolores placeat quis officiis, nobis sed vel reiciendis possimus obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae aliquid sunt. Tenetur accusantium maiores repellat optio, cum possimus? Maxime blanditiis molestiae quam officiis fuga accusamus similique a tenetur exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus vitae laboriosam architecto aperiam, odit dolore nemo similique vero quae, neque assumenda aut sint eligendi nam! Odit repellat obcaecati quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta deleniti tempora nihil rerum perspiciatis, ipsa, explicabo error rem harum dolores placeat quis officiis, nobis sed vel reiciendis possimus obcaecati.'} typeCard={'response'}/>
                {cardChat.map((card) => {
                    return <CardChat textOfCard={card.text} typeCard={card.type} key={card.text}/>
                })}
            </div>
            <Search placeholder={'Posso ajudar em algo mais?...'} reference={inputUserRef} functionOfButton={handleButtonClick}/>
        </div>
    )
}
