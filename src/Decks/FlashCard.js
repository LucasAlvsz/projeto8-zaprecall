export default function Flashcard({ questionNum, funct, status }) {
    return (
        <div className={status} onClick={() => funct("open-flash-card")}>
            <p>Pergunta {questionNum}</p>
            <img src="./imgs/play.svg" />
        </div>
    )
}