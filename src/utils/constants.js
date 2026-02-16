import iconPaper from "../assets/images/icon-paper.svg"
import iconScissors from "../assets/images/icon-scissors.svg"
import iconRock from "../assets/images/icon-rock.svg"
import iconSpock from "../assets/images/icon-spock.svg"
import iconLizard from "../assets/images/icon-lizard.svg"

export const PICK = {
    ROCK: 'ROCK',
    SCISSORS: 'SCISSORS',
    PAPER: 'PAPER',
    LIZARD: 'LIZARD',
    SPOCK: 'SPOCK'
}
export const COLORS = {
    ROCK: "hsl(349, 71%, 52%)",
    SCISSORS: "hsl(39, 89%, 49%)",
    PAPER: "hsl(230, 89%, 62%)",
    LIZARD:  "hsl(261, 73%, 60%)",
    SPOCK: "hsl(189, 59%, 53%)"
}
export const GAME_MODE = {
    BASIC: true,
    ADVANCED: false
}
export const WINNER = {
    HOUSE: 'HOUSE',
    PLAYER: 'PLAYER',
    TIE: 'TIE'
}

export function housePick(a) {
    const random = Math.floor((Math.random() * a));
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
        case 3:
            house = PICK.LIZARD;
            break;
        case 4:
            house = PICK.SCISSORS;
            break;
        default:
            house = ""
            break;
    }
    return house;
}
export function getResult(player, house){
    if (house === player) return WINNER.TIE;

    else if (
        (player === PICK.ROCK && house === PICK.SCISSORS) ||
        (player === PICK.ROCK && house === PICK.LIZARD) ||

        (player === PICK.PAPER && house === PICK.ROCK) ||
        (player === PICK.PAPER && house === PICK.SPOCK) ||

        (player === PICK.SCISSORS && house === PICK.PAPER) ||
        (player === PICK.SCISSORS && house === PICK.LIZARD) ||

        (player === PICK.LIZARD && house === PICK.SPOCK) ||
        (player === PICK.LIZARD && house === PICK.PAPER) ||

        (player === PICK.SPOCK && house === PICK.SCISSORS) ||
        (player === PICK.SPOCK && house === PICK.ROCK)
    ){
        return WINNER.PLAYER;
    }

    else {
        return WINNER.HOUSE;
    }
}
export function setIcon(value) {
    let icon;
    switch (value) {
        case PICK.ROCK:
            icon = iconRock;
            break;
        case PICK.PAPER:
            icon = iconPaper;
            break;
        case PICK.SCISSORS:
            icon = iconScissors;
            break;
        case PICK.LIZARD:
            icon = iconLizard;
            break;
        case PICK.SPOCK:
            icon = iconSpock;
            break;
    }
    return icon;
}

export function getOutcome(player, house) {
    // ROCK
    if (player === PICK.ROCK && house === PICK.SCISSORS) return "Rock crushed Scissors";
    if (player === PICK.ROCK && house === PICK.LIZARD) return "Rock crushed Lizard";
    if (player === PICK.ROCK && house === PICK.PAPER) return "Paper covered Rock";
    if (player === PICK.ROCK && house === PICK.SPOCK) return "Spock vaporized Rock";

    // PAPER
    if (player === PICK.PAPER && house === PICK.ROCK) return "Paper covered Rock";
    if (player === PICK.PAPER && house === PICK.SPOCK) return "Paper disproved Spock";
    if (player === PICK.PAPER && house === PICK.SCISSORS) return "Scissors cut Paper";
    if (player === PICK.PAPER && house === PICK.LIZARD) return "Lizard ate Paper";

    // SCISSORS
    if (player === PICK.SCISSORS && house === PICK.PAPER) return "Scissors cut Paper";
    if (player === PICK.SCISSORS && house === PICK.LIZARD) return "Scissors decapitated Lizard";
    if (player === PICK.SCISSORS && house === PICK.ROCK) return "Rock crushed Scissors";
    if (player === PICK.SCISSORS && house === PICK.SPOCK) return "Spock smashed Scissors";

    // LIZARD
    if (player === PICK.LIZARD && house === PICK.SPOCK) return "Lizard poisoned Spock";
    if (player === PICK.LIZARD && house === PICK.PAPER) return "Lizard ate Paper";
    if (player === PICK.LIZARD && house === PICK.ROCK) return "Rock crushed Lizard";
    if (player === PICK.LIZARD && house === PICK.SCISSORS) return "Scissors decapitated Lizard";

    // SPOCK
    if (player === PICK.SPOCK && house === PICK.SCISSORS) return "Spock smashed Scissors";
    if (player === PICK.SPOCK && house === PICK.ROCK) return "Spock vaporized Rock";
    if (player === PICK.SPOCK && house === PICK.PAPER) return "Paper disproved Spock";
    if (player === PICK.SPOCK && house === PICK.LIZARD) return "Lizard poisoned Spock";

    return "";
}
