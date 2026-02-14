export function Footer(props) {

    const { showRules, open } = props;

    return (
        <div>
            {!showRules && <button id="rules" onClick={open}>Rules</button>}
        </div>
    )
}