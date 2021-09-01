import logo from "../../logo.svg";
import "./App.css";
import { stackExchangeApi } from "../../utils/StackExchangeApi";

function App() {
    return (
        <div className="App">
            <button onClick={stackExchangeApi.getQuestions}>onClick</button>p
        </div>
    );
}

export default App;
