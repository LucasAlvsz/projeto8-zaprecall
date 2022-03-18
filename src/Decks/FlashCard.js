import { useState } from "react"
export default function Flashcard({ questionNum, question, answer }) {
    function checkStatus(status) {
        if (flashCardStatus === "flash-card") {
            return (
                <>
                    <p>Pergunta {questionNum}</p>
                    <img src="./imgs/play.svg" />
                </>
            )
        }
        else if (flashCardStatus === "opened-flash-card") {
            return (
                <>
                    <p>{question}</p>
                    <img src="./imgs/turn.svg" onClick={(e) => {
                        e.stopPropagation()
                        setFlashCardStatus("turned-flash-card")
                    }} />
                </>
            )
        }
        else if (flashCardStatus === "turned-flash-card") {
            return (
                <>
                    <p>{answer}</p>
                    <div className="buttons">
                        <button>Não lembrei</button>
                        <button>Quase não lembrei</button>
                        <button>Zap!</button>
                    </div>
                </>
            )
        }
    }
    const [flashCardStatus, setFlashCardStatus] = useState("flash-card")

    return (
        <div className={flashCardStatus} onClick={() => {
            flashCardStatus === "flash-card"
                ? setFlashCardStatus("opened-flash-card")
                : setFlashCardStatus("flash-card")
        }
        }>
            {checkStatus(flashCardStatus)}

        </div>
    )
}

