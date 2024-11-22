import { useRef, useState } from "react";
import "../style/search.css"
import { FaArrowUp } from "react-icons/fa";
export function Search({placeholder}){

    const inputUserRef = useRef(null)

    const handleButtonClick = () => {
        console.log(inputUserRef.current.value)
    }

    return(
        <div className="search-main">
            <input ref={inputUserRef} id="inputUser" placeholder={placeholder} type="text"/>
            <button id="buttonSearch" onClick={handleButtonClick}><FaArrowUp/></button> 
        </div>
    )
}