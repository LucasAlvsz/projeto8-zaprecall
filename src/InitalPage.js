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
            question: "O que é JSXx?",
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
    }
    ]
    const [goalStatus, setGoalStatus] = useState("")
    const [deckStatus, setDeckStatus] = useState("")
    return (
        <div className="initial-page">
            <img src="imgs/favicon.ico" />
            <h1 className="title">ZapRecall</h1>
            <input type="number" placeholder="Digite sua meta de zaps..."
                onChange={goal => setGoalStatus(goal.target.value)}
            />
            <select onChange={deck => setDeckStatus(decks[deck.target.value].deck)}>
                <option defaultValue> Escolha seu deck</option>
                {decks.map((deck, key) => {
                    return <option value={key} key={key}> {deck.name} </option>
                })}
            </select>

            <button
                className={goalStatus !== ""
                    ? deckStatus !== ""
                        ? ""
                        : "disabled-button"
                    : "disabled-button"
                }
                onClick={() => {
                    pageStatus("not-inital")
                    goalAndDeck(goalStatus, deckStatus.sort(() => Math.random() - 0.5))
                }}>
                Iniciar Reacall!
            </button>
        </div>
    )
}