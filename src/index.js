import { render } from "react-dom";
import InitialPage from "./InitalPage";
import Header from "./Header";
import Footer from "./Footer";
import Deck from "./Decks/Deck"
function App() {
    const deck = [{pergunta: ""}, {pergunta: ""}, {pergunta: ""}]
    return (
        <>
            <Header />
            <main>
                {/* <InitialPage /> */}
                <Deck deck = {deck}/>
            </main>
            <Footer />
        </>
    )
}

const element = document.querySelector(".root")
render(<App />, element)