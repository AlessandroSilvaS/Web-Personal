import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat(){
    //? lógica de funcionamento do chat

    
    console.log(Search)
    return(
        <>
            <div className="box-of-chat"></div>
            <Search placeholder={"Posso ajuda-lo com algo mais?"} />
        </>
    )
}
