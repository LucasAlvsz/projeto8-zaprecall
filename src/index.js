import { render } from "react-dom";
import { useState } from "react"
import InitialPage from "./Components/InitalPage/InitalPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Deck from "./Components/Deck/Deck"
function App() {
    const [pageStatus, setPageStatus] = useState("initial")
    const [numCompleted, setNumCompleted] = useState(0)
    const [statusIcons, setStatusIcon] = useState([])
    const [goalAndDeck, setGoalAndDeck] = useState({})
    const [zapAmount, setZapAmount] = useState(0)
    let zapFinished = false

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
                        />
                    </main>
                    <Footer
                        numQuestions={goalAndDeck.deck.length}
                        numCompleted={numCompleted}
                        statusIcons={statusIcons}
                        zapFinished={numCompleted === goalAndDeck.deck.length ? !zapFinished : zapFinished}
                        zapAmount={zapAmount}
                        goal={goalAndDeck.goal}
                    />
                </>
            }
        </>
    )
}

const element = document.querySelector(".root")
render(<App />, element)