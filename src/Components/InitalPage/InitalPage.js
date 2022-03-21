import { useState } from "react"
export default function InitialPage({ pageStatus, goalAndDeck }) {
    const decks = [{
        name: "JSX1",
        deck: [{
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
        }
        ]
    }, {
        name: "JSX2",
        deck: [{
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        }
        ]
    }
    ]
    const [goalStatus, setGoalStatus] = useState("")
    const [deckStatus, setDeckStatus] = useState("")
    let buttonStatus = "disabled-button"
    function inputChoicesValidation(goalStatus, deckStatus) {
        if (goalStatus != "" && deckStatus != "" && goalStatus > 0) {
            if (goalStatus > deckStatus.length)
                return <div className="warning">⚠️ A meta de Zaps é maior do que o número de Flashcards! ⚠️</div>
            else
                buttonStatus = "enabled"
        }


    }
    return (
        <div className="initial-page">
            <img src="imgs/favicon.ico" />
            <h1 className="title">ZapRecall</h1>
            <select onChange={deck => setDeckStatus(decks[deck.target.value].deck)}>
                <option selected disabled > Escolha seu deck</option>
                {decks.map((deck, key) => {
                    return <option value={key} key={key}> {deck.name} {" - " + deck.deck.length + " Cards"}</option>
                })}
            </select>
            <input type="number" min="1" placeholder="Digite sua meta de zaps..."
                onChange={goal => setGoalStatus(goal.target.value)}
            />
            {inputChoicesValidation(goalStatus, deckStatus)}
            <button
                className={buttonStatus}
                onClick={() => {
                    pageStatus("not-inital")
                    goalAndDeck(goalStatus, deckStatus.sort(() => Math.random() - 0.5))
                }}>
                Iniciar Recall!
            </button>
        </div>
    )
}