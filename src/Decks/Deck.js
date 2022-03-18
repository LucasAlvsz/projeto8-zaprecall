import { useState } from "react"
import Flashcard from "./FlashCard"
export default function Deck({ deck }) {
    return (
        <div className="deck">
            {deck.map(({question, answer}, questionNum) => {
                return (
                    <Flashcard
                        questionNum={questionNum + 1}
                        key={questionNum + 1}
                        question={question}
                        answer={answer}
                    />
                )
            })
            }
        </div>
    )
}