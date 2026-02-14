export function Score(props){
    const {score} = props;
    return (
        <div className="score">
            <span>Score</span> <span>{score}</span>
        </div>
    )
}