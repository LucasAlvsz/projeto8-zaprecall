import { useState } from "react"
export default function Flashcard({ questionNum, question, answer, updateNumCompleted, updateStatusIcon, updateZapAmount, reestart, updateReestart }) {
    function checkStatus(status) {
        if (status === "flash-card") {
            return (
                <>
                    <p>Pergunta {questionNum}</p>
                    <img src="./imgs/play.svg" />
                </>
            )
        }
        else if (status === "opened-flash-card") {
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
        else if (status === "turned-flash-card") {
            return (
                <>
                    <p>{answer}</p>
                    <div className="buttons">
                        <button onClick={(e) => {
                            e.stopPropagation()
                            updateNumCompleted(1)
                            updateStatusIcon("./imgs/notRemember.svg")
                            setFlashCardStatus("not-remember")
                        }}>
                            Não lembrei
                        </button>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            updateNumCompleted(1)
                            updateStatusIcon("./imgs/almostNotRemember.svg")
                            setFlashCardStatus("almost-not-remember")
                        }}>
                            Quase não lembrei
                        </button>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            updateNumCompleted(1)
                            updateZapAmount(1)
                            updateStatusIcon("./imgs/zap.svg")
                            setFlashCardStatus("zap")
                        }}>
                            Zap!
                        </button>
                    </div>
                </>
            )
        }
        else if (status === "not-remember") {
            return (
                <>
                    <p>Pergunta {questionNum}</p>
                    <img src="./imgs/notRemember.svg" />
                </>
            )
        }
        else if (status === "almost-not-remember") {
            return (
                <>
                    <p>Pergunta {questionNum}</p>
                    <img src="./imgs/almostNotRemember.svg" />
                </>
            )
        }
        else if (status === "zap") {
            return (
                <>
                    <p>Pergunta {questionNum}</p>
                    <img src="./imgs/zap.svg" />
                </>
            )
        }
    }
    const [flashCardStatus, setFlashCardStatus] = useState("flash-card")
 
    if (reestart) {
        console.log("aaaa");
        setFlashCardStatus("flash-card")
        updateReestart(false)
    }

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

