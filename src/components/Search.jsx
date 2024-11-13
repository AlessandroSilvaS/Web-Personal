import "../style/search.css"
import { FaArrowUp } from "react-icons/fa";
export function Search(){
    return(
        <div className="search-main">
            <input id="inputUser" placeholder="O que gostaria de treinar?" type="text"/>
            <button id="buttonSearc"><FaArrowUp/></button> 
        </div>
    )
}