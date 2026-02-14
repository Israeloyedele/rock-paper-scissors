import { PICK } from "../utils/constants.js";
import { useState } from "react";
import iconpaper from "../assets/images/icon-paper.svg"
import iconscissors from "../assets/images/icon-scissors.svg"
import iconrock from "../assets/images/icon-rock.svg"
import { COLORS } from "../utils/constants.js";
import { Circle } from "./Circle.jsx";


export function Display(props) {
    const [hasPlayerPicked, setHasPlayerPicked] = useState(false);
    const [playerIcon, setPlayerIcon] = useState(null);
    const [houseIcon, setHouseIcon] = useState(null);
    const [winner, setWinner] = useState(null);
    const { setScore } = props;
    const [playerColor, setPlayerColor] = useState(null);
    const [houseColor, setHouseColor] = useState(null);



    function housePick() {
        const random = Math.floor((Math.random() * 3));
        let house;
        switch (random) {
            case 0:
                house = PICK.ROCK;
                break;
            case 1:
                house = PICK.PAPER;
                break;
            case 2:
                house = PICK.SCISSORS;
                break;
        }
        return house;
    }
    function setIcon(value) {
        let icon;
        switch (value) {
            case PICK.ROCK:
                icon = iconrock;
                break;
            case PICK.PAPER:
                icon = iconpaper;
                break;
            case PICK.SCISSORS:
                icon = iconscissors;
                break;
        }
        return icon;
    }

    function checkWinner(house, player) {
        if (house === player) { setWinner("It's a Tie!")}
        else if (
            player === PICK.ROCK  && house === PICK.SCISSORS ||
            player === PICK.PAPER && house === PICK.ROCK ||
            player === PICK.SCISSORS && house === PICK.PAPER
        ){
            setWinner("You Win!")
            setScore(prevScore => prevScore + 1)

        }

        else setWinner("You Lose!");
    }

    function handlePlayerPicked(value) {

        const house = housePick();
        setPlayerIcon(setIcon(value)) ;
        setHouseIcon(setIcon(house)) ;
        checkWinner(house, value);
        setHasPlayerPicked(true);
        setPlayerColor(COLORS[value]);
        setHouseColor(COLORS[house]);
    }

    return (
        <div className="display">
            {!hasPlayerPicked ?
                <div className="btn-display">
                    <Circle pick={() =>  handlePlayerPicked(PICK.PAPER)} icon={iconpaper} color={COLORS.PAPER} />
                    <Circle pick={() =>  handlePlayerPicked(PICK.SCISSORS)} icon={iconscissors} color={COLORS.SCISSORS} />
                    <Circle pick={() =>  handlePlayerPicked(PICK.ROCK)} icon={iconrock} color={COLORS.ROCK} />
                </div>
                :
                <div className="result-display">
                    <div>
                        {/*<img src={playerIcon} alt=""/>*/}
                        <Circle icon={playerIcon} color={playerColor} />
                        <p>YOU PICKED</p>
                    </div>

                    <div>
                        {/*<img src={houseIcon} alt=""/>*/}
                        <Circle icon={houseIcon} color={houseColor} />
                        <p>THE HOUSE PICKED</p>
                    </div>
                    <h1>{winner}</h1>
                    <button onClick={() => setHasPlayerPicked(false)} className="play-again">Play Again</button>
                </div>
            }

        </div>

    )
}