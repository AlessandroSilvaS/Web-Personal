import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat(){
    return(
        <>
            <div className="boxChat">
                <CardChat textOfCard={"Olá mundo!!"} typeCard={'question'}/>
                <h2 className="teste">Text teste</h2>
            </div>
            <Search/>
        </>
    )
}