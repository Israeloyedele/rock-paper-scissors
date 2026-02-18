import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { Modal } from './Modal.jsx'
import { Display } from './Display.jsx'
import { useEffect, useState } from "react"
import { getScore, setLocalScore } from "../hooks/useLocalStorage.js";
import { AnimatePresence } from "framer-motion";
import { GAME_MODE } from "../utils/constants.js";

export function Game(){
    const [score, setScore] = useState(getScore("score", 0));
    const [showRules, setShowRules] = useState(false);
    useEffect(() => { setLocalScore("score", score)}, [score])
    const [gameMode, setGameMode] = useState(GAME_MODE.BASIC);
    const [outcome, setOutcome] = useState("");
    const [hasPlayerPicked, setHasPlayerPicked] = useState(false);
    const [mountKey, setMountKey] = useState(1);



    return (
        <div className="game">
            <Header outcome={outcome} gameMode={gameMode} score={score}/>
            <Display key={mountKey} hasPlayerPicked={hasPlayerPicked} setHasPlayerPicked={setHasPlayerPicked} setOutcome={setOutcome} gameMode={gameMode} setScore={setScore} />
            <AnimatePresence>{showRules && (<Modal gameMode={gameMode} showRules={showRules} close={() => setShowRules(false)}/>)}</AnimatePresence>
            <Footer setMountKey={setMountKey} setOutcome={setOutcome} setHasPlayerPicked={setHasPlayerPicked} resetScore={() => setScore(0)} changeMode={() => setGameMode(!gameMode)} gameMode={gameMode} open={() => setShowRules(true)}/>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Built by <a href="https://github.com/Israeloyedele" target="_blank">Israel Oyedele</a>.
            </div>
        </div>
    )
}