
const CardChat = ({textOfCard, typeCard}) => {

    const cardStyle = {
        backgroundColor: 'rgb(238, 238, 238)',
        padding: '15px',
        fontSize: '18px',
        borderRadius: '15px',
        maxWidth: '500px',
        minWidth: '100px',
        minHeight: '15px',
        marginBottom: "20px",
        alignSelf: typeCard === "question" ? 'flex-end' : 'flex-start'
    }

    return(
        <div className="Box" style={cardStyle}>
            {textOfCard}
            teste
        </div>
    )
}
export default CardChat