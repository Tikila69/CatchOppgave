import { ReactNode, useState } from "react";
import { FaCrown } from "react-icons/fa6";

function DropdownCard(props: {
    color?: string,
    text: string,
    children: ReactNode,
    isLeader: boolean
}) {
    
    const [dropdownState, setDropdownState] = useState<boolean>(false)
    
    return (
        <div
            className="flex flex-col w-full cursor-pointer"
            style={{ color: props.color ? props.color : "" }}
            
        >
            <div
                className="flex justify-between" onClick={() => {
                setDropdownState(!dropdownState);
            }}
            >
                <div
                    className="flex flex-row items-center gap-2 m-2"
                >
                    <p>{props.text}</p>
                    {props.isLeader&&<FaCrown />}
                </div>
                <div>
                    <a style={{
                        border: "Solid",
                        borderWidth: "0px 3px 3px 0px",
                        display: "inline-block",
                        padding: "3px",
                        transform: dropdownState ?  "rotate(-135deg)" : "rotate(45deg)"
                    }}
                    ></a>
                </div>
            </div>
                {dropdownState && (
                    <div className="flex flex-col gap-2">
                        {props.children}
                    </div>
                )}
        </div>
    )

}

export default DropdownCard