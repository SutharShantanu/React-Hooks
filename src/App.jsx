import "./App.css";
import GridCard from "./Components/GridCard";
import { FaReact } from "react-icons/fa";

function App() {
    return (
        <div className="App">
            <header>
                <h1>React Hooks</h1>
                <span>&nbsp;</span>
                <FaReact className="icon" />
            </header>
            <div className="main">
                <GridCard
                    title="useContext Hook"
                    code="https://codesandbox.io/s/contexthook-2l9gq3"
                    hook="ContextHook"
                    embed="https://codesandbox.io/embed/contexthook-2l9gq3?fontsize=8&hidenavigation=1&theme=dark&view=preview&hidedevtools=1&expanddevtools=0&forcerefresh=1&"
                    link="https://codesandbox.io/s/contexthook-2l9gq3?fontsize=14&hidenavigation=1&theme=dark"
                />
                <GridCard
                    title="useReducer Hook"
                    code="https://codesandbox.io/s/contexthook-2l9gq3"
                    hook="ContextHook"
                    embed="https://codesandbox.io/embed/usereducer-jmn63o?fontsize=14&hidenavigation=1&theme=dark&view=preview&hidedevtools=1&expanddevtools=0&forcerefresh=1&"
                    link="https://codesandbox.io/s/usereducer-jmn63o?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                />
                <GridCard
                    title="useRef Hook"
                    code="https://codesandbox.io/s/contexthook-2l9gq3"
                    hook="ContextHook"
                    embed="https://codesandbox.io/embed/useref-cpmr10?fontsize=14&hidenavigation=1&theme=dark&view=preview&hidedevtools=1&expanddevtools=0&forcerefresh=1&"
                    link="https://codesandbox.io/s/useref-cpmr10?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                />
            </div>
        </div>
    );
}
export default App;

