import { useState } from "react"
import Flashcard from "./FlashCard"
export default function Deck({ deck }) {
    const [flashCardStatus, setFlashCardStatus] = useState("flash-card")
    return (
        <div className="deck">
            {deck.map((deck, questionNum) => {
                return (
                    <Flashcard
                        questionNum={questionNum + 1}
                        key={questionNum + 1}
                        funct={setFlashCardStatus}
                        status={flashCardStatus}
                    />
                )
            })
            }
        </div>
    )
}