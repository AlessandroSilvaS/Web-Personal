import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat(){
    return(
        <>
            <div className="box-of-chat">
                <CardChat textOfCard={"Esse é um card do chat"}/>
                <CardChat textOfCard={"Esse é um outro card resposta do chat"}/>
                <CardChat textOfCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique sapiente velit quis ex non nesciunt sunt, minima aperiam, dolor ipsum totam consectetur neque eum harum architecto repellendus recusandae. Omnis! "}/>
            </div>
        </>
    )
}