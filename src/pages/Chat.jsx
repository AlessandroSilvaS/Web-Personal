import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat(){
    return(
        <>
            <div className="box-of-chat">
                <div className="box-of-chat-response">
                    <CardChat textOfCard={"Isso é uma resposta"}/>
                </div>
                <div className="box-of-chat-question">
                <CardChat textOfCard={"Isso é uma pergunta"}/>
                </div>
            </div>
            <Search placeholder={"Posso ajuda-lo com algo mais?"}/>
        </>
    )
}