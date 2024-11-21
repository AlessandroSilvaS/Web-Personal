import "../style/search.css"
import { FaArrowUp } from "react-icons/fa";
export function Search({placeholder}){
    return(
        <div className="search-main">
            <input id="inputUser" placeholder={placeholder} type="text"/>
            <button id="buttonSearc"><FaArrowUp/></button> 
        </div>
    )
}