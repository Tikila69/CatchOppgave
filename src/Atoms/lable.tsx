import { FaCrown } from "react-icons/fa6";

const FontSize = Object.freeze({
    small: "9px",
    med: "16px",
    large: "24px"
});

type FontSize = keyof typeof FontSize;


function Lable(props: {
    text: string,
    color?: string,
    fontSize?: FontSize,
    background: boolean
    isLeader?: boolean
}) {
    return (
        <div
            className="flex items-center justify-between"
            style={{
                color: props.color ? props.color : "",
                fontSize: FontSize[props.fontSize || "med"],
                backgroundColor: props.background ? "#272B35" : "",
                padding: props.background ? "1rem" : ""
            }}            
        >
            <label
                className=" rounded"
            >{props.text}</label>
            {props.isLeader && (
                <FaCrown/>
            )}
        </div>
    )
}

export default Lable;