import StatusIcons from "./StatusIcons"
export default function Footer({ numQuestions, numCompleted, statusIcons }) {
    return (
        <footer>
            <p>{numCompleted}/{numQuestions} Concluídos</p>
            <div className="status-icon">
                {statusIcons.length !== 0 ? statusIcons.map(statusIcon => {
                    return (

                        <StatusIcons
                            statusIcon={statusIcon}
                        />
                    )
                }) : ""}
            </div>


        </footer>
    )
}