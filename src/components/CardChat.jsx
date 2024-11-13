import "../style/cards.css"
const CardChat = ({textOfCard}) => {
    return(
        <>
        <div className="box-card">
            {textOfCard}
        </div>
        </>
    )
}
export default CardChat