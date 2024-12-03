import { useRef, useState } from "react";
import CardChat from "../components/CardChat"
import { Search } from "../components/Search"
import "../style/chat.css"
export function Chat({displayOfChat, textOfFirstQuestion}){
    const inputUserRef = useRef(null)

    const [cardChat, setCardChat] = useState([])

    async function inputPrompt(prompt, urlServer){
        try {
            const response = await fetch(urlServer, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(prompt)
            })

            if(!response.ok){
                console.log(`Error! ${response.status}`)
            }

            const result = await response.json()
            return result

        } catch (error) {
            console.log(`Internal error of sever! ${error.message}`)
        }
    }

    const handleButtonClick = () => {
        const message = inputUserRef.current.value;
        //const response = requisition

        if(message){
            setCardChat((question) => [
                ...question,
                {text: message, type: 'question'}
                //{text: requisition, type: 'response}
            ])
            inputUserRef.current.value = ''
        }
    }

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
          handleButtonClick()
        }
      })

      const response = 'Treino de Bíceps Rosca Direta (Barra ou Halteres) Execução: Segure uma barra ou halteres com as palmas voltadas para cima, flexione os cotovelos e levante o peso até a altura do peito. Abaixe controladamente. Séries: 3-4 Repetições: 8-12 Dica: Mantenha os cotovelos próximos ao tronco para evitar ativação de outros músculos. 2. Rosca Alternada (com Halteres) Execução: Com halteres, alterne o movimento entre os braços, levantando um enquanto o outro desce. Séries: 3 Repetições: 10-12 por braço Dica: Gire levemente o punho (supinação) ao subir para maior ativação. 3. Rosca Concentrada (Banco) Execução: Apoie o braço em um banco inclinado ou na perna. Flexione o cotovelo, levantando o peso de forma controlada. Séries: 3 Repetições: 10-12 Dica: Este é um movimento isolador; concentre-se em contrair o bíceps no topo. 4. Rosca Martelo (Halteres ou Corda) Execução: Segure os halteres com as palmas voltadas para dentro (posição neutra) e levante alternadamente. Séries: 3 Repetições: 8-12 Dica: Este exercício foca o braquiorradial e o braquial, dando volume ao braço. 5. Rosca Inversa (Barra ou Halteres) Execução: Segure a barra ou os halteres com as palmas para baixo (pegada pronada). Levante até o peito e abaixe devagar. Séries: 3 Repetições: 10-12 Dica: Trabalha o braquiorradial e parte do antebraço, além do bíceps. Dicas Gerais Aquecimento: Faça um aquecimento leve (5-10 minutos de cardio ou movimentos com pesos leves). Progressão: Se os pesos parecerem leves após as repetições sugeridas, aumente gradualmente. Controle: Priorize movimentos controlados, evitando balanços ou usar impulso. Descanso: Descanse 60-90 segundos entre as séries. Se quiser sugestões específicas ou outros tipos de treinos, é só pedir!'

      const end = 850
      const cut = response.lastIndexOf('.', end)

    return(
        <div style={{display: displayOfChat === true ? 'block' : 'none'}}>
            <div className="box-of-chat">
                <CardChat textOfCard={textOfFirstQuestion} typeCard={'question'}/>
                <CardChat textOfCard={response.slice(0, cut + 1)} typeCard={'response'}/>
                <CardChat textOfCard={response.slice( cut + 1).trim()} typeCard={'response'}/>
                {cardChat.map((card) => {
                    return <CardChat textOfCard={card.text} typeCard={card.type} key={card.text}/>
                })}
            </div>
            <Search placeholder={'Posso ajudar em algo mais?...'} reference={inputUserRef} functionOfButton={handleButtonClick}/>
        </div>
    )
}