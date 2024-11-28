const SugestionCards = ({sugestion, color, buttonFunction}) => {
    const sugestionStyle = {
        minWidth: '150px',
        minHeight: '70px',
        border: `1px solid #000`,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '28px',
        color: `${color}`,
        cursor: 'pointer'
    }

    return(
        <>
            <button style={sugestionStyle} onClick={buttonFunction}>{sugestion}</button>
        </>
    )
}
export default SugestionCards
