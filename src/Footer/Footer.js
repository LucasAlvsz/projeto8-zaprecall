import StatusIcons from "./StatusIcons"
export default function Footer({ numQuestions, numCompleted, statusIcons, zapFinished, zapAmount, goal, reestart }) {
    return (
        <footer className={zapFinished ? "zap-end" : ""}>
            {zapFinished
                ? zapAmount >= goal
                    ? <>
                        <div className="title">
                            <img src="./imgs/parabens.png" />
                            <p>PARABÉNS!</p>
                        </div>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </>
                    : <>
                        <div className="title">
                            <img src="./imgs/sad.png" />
                            <p>PUTZ!</p>
                        </div>
                        <p>Ainda faltaram alguns...
                            Mas não desanime!</p>
                    </>
                : <p>{numCompleted}/{numQuestions} CONCLUÍDOS</p>
            }
            <div className="status-icon">
                {statusIcons.length !== 0 ? statusIcons.map((statusIcon, i) => {
                    return (
                        <StatusIcons
                            statusIcon={statusIcon}
                            key={i}
                        />
                    )
                }) : ""}
            </div>
            {zapFinished ? <button /*onClick={() => reestart(true)}*/>Reiniciar Recall</button> : ""}   
        </footer>
    )
}