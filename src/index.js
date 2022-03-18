import { render } from "react-dom";
import InitialPage from "./InitalPage";
import Header from "./Header";
import Footer from "./Footer";
import Deck from "./Decks/Deck"
function App() {
    const deck = [{
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    }, {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    }, {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula"
    }, {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    }, {
        question: "O ReactDOM nos ajuda __ ",
        answer: "Interagindo com a DOM para colocar componentes React na mesma"
    }, {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências"
    }, {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes"
    }, {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }]
    return (
        <>
            <Header />
            <main>
                {/* <InitialPage /> */}
                <Deck deck={deck} />
            </main>
            <Footer
                numQuestions={deck.length}
            />
        </>
    )
}

const element = document.querySelector(".root")
render(<App />, element)