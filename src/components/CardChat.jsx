
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
        alignSelf: typeCard === "question" ? 'flex-end' : 'flex-start',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px'
    }
    const imageStyle = {
        width: '30px',
        height: '30px',
        display: typeCard === 'question' ? 'none' : 'block'
    }
    return(
        <div className="Box" style={cardStyle}>
            <img src="src/images/avatarRD.jpeg" alt="" style={imageStyle}/>
            {textOfCard}
        </div>
    )
}
export default CardChat