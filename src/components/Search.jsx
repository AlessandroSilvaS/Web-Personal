import "../style/search.css"
import { FaArrowUp } from "react-icons/fa";
export function Search({placeholder, reference, functionOfButton}){

    return(
        <div className="search-main">
            <input ref={reference} id="inputUser" placeholder={placeholder} type="text"/>
            <button id="buttonSearch" onClick={functionOfButton}><FaArrowUp/></button> 
        </div>
    )
}
