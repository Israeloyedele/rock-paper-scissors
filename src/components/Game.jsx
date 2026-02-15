import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { Modal } from './Modal.jsx'
import { Display } from './Display.jsx'
import { useEffect, useState } from "react"
import { getScore, setLocalScore } from "../hooks/useLocalStorage.js";

export function Game(){
    const [score, setScore] = useState(getScore("score", 0));
    const [showRules, setShowRules] = useState(false);
    useEffect(() => { setLocalScore("score", score)}, [score])

    return (
        <div className="game">
            <Header score={score}/>
            <Display setScore={setScore}/>
            {showRules && <Modal close={() => setShowRules(false)}/>}
            <Footer open={() => setShowRules(true)}/>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Built by <a href="https://github.com/Israeloyedele" target="_blank">Israel Oyedele</a>.
            </div>
        </div>
    )
}