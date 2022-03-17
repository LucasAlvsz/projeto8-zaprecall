import { render } from "react-dom";
import InitialPage from "./InitalPage";

function App() {
    return (
        <div className="main">
            <InitialPage />

        </div>

    )
}

const element = document.querySelector(".root")
render(<App />, element)