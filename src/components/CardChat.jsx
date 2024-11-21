import "../style/cards.css"
const CardChat = ({textOfCard}) => {

    const cardStyle = {
        backgroundColor: 'rgb(238, 238, 238)',
        padding: '15px',
        fontSize: '18px',
        borderRadius: '15px',
        maxWidth: '500px',
        minWidth: '100px',
        minHeight: '15px',
        marginBottom: "20px"
    }

    return(
        <div className="Box" style={cardStyle}>
            {textOfCard}
        </div>
    )
}
export default CardChat