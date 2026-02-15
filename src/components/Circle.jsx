import {COLORS, PICK} from "../utils/constants.js";

export function Circle(props) {
    const { color, icon, pick } = props;

    return (
        <div onClick={pick} className="circle"
             style={{ "--circle-color": color }}>
            <img src={icon} alt=""  />
        </div>
    )
}