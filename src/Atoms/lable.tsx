import { FaCrown } from "react-icons/fa6";

const FontSize = Object.freeze({
    small: "9px",
    med: "16px",
    large: "24px",
});

type FontSize = keyof typeof FontSize;

function Lable({
    text,
    color,
    fontSize,
    background,
    isLeader,
}: {
    text: string;
    color?: string;
    fontSize?: FontSize;
    background?: boolean;
    isLeader?: boolean;
}) {
    return (
        <div
            className="flex items-center justify-between gap-2"
            style={{
                color: color ? color : "",
                fontSize: FontSize[fontSize || "med"],
                backgroundColor: background ? "#272B35" : "transparent",
                padding: background ? "1rem" : "0",
                transition: "background-color 0.2s ease",
            }}
        >
            <p className=" rounded">{text}</p>
            {isLeader && <FaCrown />}
        </div>
    );
}

export default Lable;
