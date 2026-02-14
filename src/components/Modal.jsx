import rulesImg from "../assets/images/image-rules.svg"
import closeImg from "../assets/images/icon-close.svg"

export function Modal(props) {
    const { close } = props;
    return (
        <div>
            <img src={rulesImg} alt=""/>
            <button onClick={close}><img src={closeImg} alt=""/></button>
        </div>
    )
}