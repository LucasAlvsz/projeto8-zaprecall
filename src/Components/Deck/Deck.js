import Flashcard from "./FlashCard"
export default function Deck({ deck, updateNumCompleted, updateStatusIcon, updateZapAmount, reestart, updateReestart }) {
    return (
        <div className="deck">
            {deck.map(({ question, answer }, questionNum) => {
                return (
                    <Flashcard
                        questionNum={questionNum + 1}
                        key={questionNum + 1}
                        question={question}
                        answer={answer}
                        updateNumCompleted={updateNumCompleted}
                        updateStatusIcon={updateStatusIcon}
                        updateZapAmount={updateZapAmount}
                        reestart={reestart}
                        updateReestart={updateReestart}
                    />
                )
            })
            }
        </div>
    )
}