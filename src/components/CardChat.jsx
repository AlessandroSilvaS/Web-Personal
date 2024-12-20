
const CardChat = ({textOfCard, typeCard}) => {

    const alingItems = (trueOption, falseOption) => typeCard === 'question' ? trueOption : falseOption

    const cardStyle = {
        backgroundColor: alingItems('rgb(238, 238, 238)', 'trasparent'),
        padding: '15px',
        fontSize: '18px',
        borderRadius: '15px',
        maxWidth: '500px',
        minWidth: '100px',
        minHeight: alingItems('20px', '400px'),
        maxHeight: '2000px',
        marginBottom: alingItems('20px', '0px'),
        alignSelf: alingItems('flex-end', 'flex-start'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: alingItems('center', 'start'),
        gap: '5px',
        textAlign: 'justify'
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