import { render } from "react-dom";
import { useState } from "react"
import InitialPage from "./InitalPage";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Deck from "./Decks/Deck"
function App() {
    const [pageStatus, setPageStatus] = useState("initial")
    const [numCompleted, setNumCompleted] = useState(0)
    const [statusIcons, setStatusIcon] = useState([])
    const [goalAndDeck, setGoalAndDeck] = useState({})
    const [zapAmount, setZapAmount] = useState(0)
    let zapFinished = false
    const [reestart, setReestart] = useState(false)
    if (reestart) {
        // setNumCompleted(0)
        // setStatusIcon([])
        // setZapAmount(0)
        // zapFinished = false
    }
    return (
        <>
            {pageStatus === "initial"
                ? <InitialPage
                    pageStatus={updatedPageStatus => setPageStatus(updatedPageStatus)}
                    goalAndDeck={(updatedGoal, updatedDeck) => setGoalAndDeck({ goal: updatedGoal, deck: updatedDeck })}
                />
                : <>
                    <Header />
                    <main>
                        <Deck
                            deck={goalAndDeck.deck}
                            updateNumCompleted={numCompletedUpdated => setNumCompleted(numCompletedUpdated + numCompleted)}
                            updateStatusIcon={updateStatusIcon => setStatusIcon([...statusIcons, updateStatusIcon])}
                            updateZapAmount={updateZapAmount => setZapAmount(updateZapAmount + zapAmount)}
                            reestart={reestart}
                            updateReestart={updateReestart => {
                                console.log(updateReestart);
                                setReestart(updateReestart)}}
                        />
                    </main>
                    <Footer
                        numQuestions={goalAndDeck.deck.length}
                        numCompleted={numCompleted}
                        statusIcons={statusIcons}
                        zapFinished={numCompleted === goalAndDeck.deck.length ? !zapFinished : zapFinished}
                        zapAmount={zapAmount}
                        goal={goalAndDeck.goal}
                        // reestart={updateReestart => setReestart(updateReestart)}
                    />
                </>
            }
        </>
    )
}

const element = document.querySelector(".root")
render(<App />, element)