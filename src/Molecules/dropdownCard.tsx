import { ReactNode, useState } from "react";
import Lable from "../Atoms/lable";
import { Department } from "../types";

function DropdownCard(props: {
    color?: string;
    firm: string;
    department?: Department[];
    children?: ReactNode;
    isLeader?: boolean;
}) {
    console.log("dropdown", props);
    const [dropdownState, setDropdownState] = useState<boolean>(false);
    return (
        <div className="flex flex-col w-full" style={{ color: props.color ? props.color : "" }}>
            <div
                className="flex justify-between cursor-pointer"
                onClick={() => {
                    setDropdownState(!dropdownState);
                }}
            >
                <div className="flex flex-col items-center gap-2">
                    <p>{props.firm.toUpperCase()}</p>
                    <div className="flex flex-col self-start w-auto gap-2">
                        {props.department?.map((department: Department) => (
                            <Lable
                                key={department.name}
                                text={department.name}
                                isLeader={department.isLeader}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex m-2 items-center">
                    <a
                        style={{
                            border: "Solid",
                            borderWidth: "0px 3px 3px 0px",
                            display: "inline-block",
                            padding: "3px",
                            transform: dropdownState ? "rotate(-135deg)" : "rotate(45deg)",
                        }}
                    ></a>
                </div>
            </div>
            {dropdownState && <div className="flex flex-col gap-2">{props.children}</div>}
        </div>
    );
}

export default DropdownCard;
