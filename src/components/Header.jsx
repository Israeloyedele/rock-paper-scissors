import { Score } from "./Score.jsx";
import logo from "../assets/images/logo.svg"
import advancedLogo from "../assets/images/logo-bonus.svg"

export function Header(props) {
    const { outcome, gameMode, score } = props;
    return (
        <div className="header-wrapper">
            <div className="header">
                <img id="logo" src={gameMode? logo : advancedLogo} alt="img" />
                <Score score={score} />
            </div>
            <p className="outcome">{outcome}</p>

        </div>


    )
}