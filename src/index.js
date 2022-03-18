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
    const [deckSelected, setDeckSelected] = useState([])
    const [notRememberAmount, setNotRememberAmount] = useState(0)
    const zapFinished = false
    return (
        <>
            {pageStatus === "initial"
                ? <InitialPage
                    pageStatus={updatedPageStatus => setPageStatus(updatedPageStatus)}
                    deckSelected={upadetedDeckSelected => setDeckSelected(upadetedDeckSelected)}
                />
                : <>
                    <Header />
                    <main>
                        <Deck
                            deck={deckSelected}
                            updateNumCompleted={numCompletedUpdated => setNumCompleted(numCompletedUpdated + numCompleted)}
                            updateStatusIcon={updateStatusIcon => setStatusIcon([...statusIcons, updateStatusIcon])}
                            updateNotRememberAmount={updateNotRememberAmount => {
                                setNotRememberAmount(updateNotRememberAmount + notRememberAmount)
                            }}
                        />
                    </main>
                    <Footer
                        numQuestions={deckSelected.length}
                        numCompleted={numCompleted}
                        statusIcons={statusIcons}
                        zapFinished={numCompleted === deckSelected.length ? !zapFinished : zapFinished}

                        notRememberAmount={notRememberAmount}
                    />
                </>
            }
        </>
    )
}

const element = document.querySelector(".root")
render(<App />, element)