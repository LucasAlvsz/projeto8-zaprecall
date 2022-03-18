export default function InitialPage({ pageStatus, deckSelected }) {
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
    return (
        <div className="initial-page">
            <img src="imgs/favicon.ico" />
            <h1 className="title">ZapRecall</h1>
            <input type="number" placeholder="Digite sua meta de zaps..."></input>
            <select placeholder="eoq">
                <option defaultValue> Escolha seu deck</option>
                {decks.map((deck, key) => {
                    return (
                        <option value={deck.deck} key={key}>{deck.name}</option>
                    )
                })}
            </select>
            <button onClick={() => {
                pageStatus("not-inital")
                deckSelected(decks[0].deck)
            }}>
                Iniciar Reacall!
            </button>
        </div>
    )
}