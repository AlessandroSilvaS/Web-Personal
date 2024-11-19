import "../style/cards.css"
const CardChat = ({textOfCard, typeCard}) => {

    const JustifyCard = typeCard === "question" ? "rigth" : "left"

    const cardStyle = {
        backgroundColor: '#B4B4B4',
        padding: '15px',
        fontSize: '18px',
        borderRadius: '15px',
        maxWidth: '500px',
        minWidth: '100px',
        minHeigth: '15px',
        textAling: {JustifyCard}
    }

    return(
        <div className="Box" style={cardStyle}>
            {textOfCard}
        </div>
    )
}
export default CardChat