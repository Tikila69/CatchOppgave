import { FaCrown } from "react-icons/fa6";

const FontSize = Object.freeze({
    small: "9px",
    med: "16px",
    large: "24px",
});

type FontSize = keyof typeof FontSize;

function Lable(props: {
    text: string;
    color?: string;
    fontSize?: FontSize;
    background?: boolean;
    isLeader?: boolean;
}) {
    console.log("Lable", props);
    return (
        <div
            className="flex items-center justify-between gap-2"
            style={{
                color: props.color ? props.color : "",
                fontSize: FontSize[props.fontSize || "med"],
                backgroundColor: props.background ? "#272B35" : "",
                padding: props.background ? "1rem" : "",
            }}
        >
            <p className=" rounded">{props.text.toUpperCase()}</p>
            {props.isLeader && <FaCrown />}
        </div>
    );
}

export default Lable;
