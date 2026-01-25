import { FaCrown } from "react-icons/fa6";

const FontSize = Object.freeze({
    small: "9px",
    med: "16px",
    large: "24px",
});

type FontSize = keyof typeof FontSize;

<<<<<<< Updated upstream
function Lable(props: {
=======
<<<<<<< Updated upstream

function Lable(props: {
    text: string,
    color?: string,
    fontSize?: FontSize,
    background: boolean
    isLeader?: boolean
=======
function Lable({
    text,
    color,
    fontSize,
    background,
    isLeader,
}: {
>>>>>>> Stashed changes
    text: string;
    color?: string;
    fontSize?: FontSize;
    background?: boolean;
    isLeader?: boolean;
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}) {
    console.log("Lable", props);
    return (
        <div
            className="flex items-center justify-between gap-2"
            style={{
<<<<<<< Updated upstream
                color: props.color ? props.color : "",
                fontSize: FontSize[props.fontSize || "med"],
                backgroundColor: props.background ? "#272B35" : "",
                padding: props.background ? "1rem" : "",
            }}
        >
<<<<<<< Updated upstream
            <p className=" rounded">{props.text.toUpperCase()}</p>
            {props.isLeader && <FaCrown />}
=======
            <label
                className=" rounded"
            >{props.text}</label>
            {props.isLeader && (
                <FaCrown/>
            )}
=======
                color: color ? color : "",
                fontSize: FontSize[fontSize || "med"],
                backgroundColor: background ? "#272B35" : "transparent",
                padding: background ? "1rem" : "0",
                transition: "background-color 0.2s ease",
            }}
        >
            <p className=" rounded">{text}</p>
            {isLeader && <FaCrown />}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        </div>
    );
}

export default Lable;
