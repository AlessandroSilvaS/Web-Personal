const SugestionCards = ({sugestion, color}) => {
    const sugestionStyle = {
        minWidth: '150px',
        minHeight: '70px',
        border: `1px solid ${color}`,
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
            <button style={sugestionStyle}>{sugestion}</button>
        </>
    )
}

export default SugestionCards
