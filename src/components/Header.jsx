import { Score } from "./Score.jsx";
import logo from "../assets/images/logo.svg"

export function Header(props) {
    const { score } = props
    return (
        <div className="header">
            <img id="logo" src={logo} alt="img" />
            <Score score={score} />
        </div>

    )
}