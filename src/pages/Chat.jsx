import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat(){
    //? lógica de funcionamento do chat
    

    return(
        <>
            <div className="box-of-chat">
                <CardChat textOfCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque placeat ex? Eligendi iusto modi, dolores ab at totam, sapiente suscipit commodi ipsam et optio. Id perspiciatis quasi quibusdam labore?"} typeCard={'question'}/>
                <CardChat textOfCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque placeat ex? Eligendi iusto modi, dolores ab at totam, sapiente suscipit commodi ipsam et optio. Id perspiciatis quasi quibusdam labore?"} />
                
            </div>
            <Search placeholder={"Posso ajuda-lo com algo mais?"}/>
        </>
    )
}