export function Footer(props) {

    const {  open } = props;

    return (
        <div className="footer">
            <button id="rules" onClick={open}>Rules</button>
        </div>
    )
}