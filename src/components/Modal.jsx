import rulesImg from "../assets/images/image-rules.svg"
import closeImg from "../assets/images/icon-close.svg"

export function Modal(props) {
    const { close } = props;
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>RULES</h2>
                <img src={rulesImg} alt=""/>
                <button className="closeModal" onClick={close}><img src={closeImg} alt=""/></button>
            </div>
        </div>
    )
}