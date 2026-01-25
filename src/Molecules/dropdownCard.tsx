import { ReactNode, useState } from "react";
import Lable from "../Atoms/lable";
import { Department } from "../types";
<<<<<<< Updated upstream

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
=======
import { FaCrown, FaTrash, FaUserTie } from "react-icons/fa6";

function DropdownCard({
    color,
    company,
    department,
    children,
    onRemoveDepartment,
    onSetLeader,
    onRemoveLeader,
}: {
    color?: string;
    company: string;
    department?: (Department & { role?: string })[];
    children?: ReactNode;
    onRemoveDepartment?: (departmentId: number) => void;
    onSetLeader?: (departmentId: number) => void;
    onRemoveLeader?: (departmentId: number) => void;
}) {
    const [dropdownState, setDropdownState] = useState(false);
    const [hoveredDept, setHoveredDept] = useState<number | null>(null);

    return (
        <div className="flex flex-col w-full" style={{ color: color ?? "" }}>
            <div
                className="flex justify-between cursor-pointer"
                onClick={() => setDropdownState(!dropdownState)}
            >
                <div className="flex flex-col items-center gap-2">
                    <p>{company.toUpperCase()}</p>
                    <div className="flex flex-col self-start w-auto gap-2">
                        {department?.map((dept) => (
                            <div
                                key={dept.id}
                                className="flex items-center gap-2"
                                onMouseEnter={() => setHoveredDept(dept.id)}
                                onMouseLeave={() => setHoveredDept(null)}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Lable
                                    text={dept.name}
                                    isLeader={dept.role === "Leader"}
                                />
                                {hoveredDept === dept.id && (
                                    <div className="flex gap-1 ml-2">
                                        {dept.role === "Leader" ? (
                                            <button
                                                onClick={() => onRemoveLeader?.(dept.id)}
                                                className="p-1 hover:opacity-70"
                                                title="Remove as leader"
                                            >
                                                <FaUserTie size={14} />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => onSetLeader?.(dept.id)}
                                                className="p-1 hover:opacity-70"
                                                title="Set as leader"
                                            >
                                                <FaCrown size={14} />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => onRemoveDepartment?.(dept.id)}
                                            className="p-1 hover:opacity-70"
                                            title="Remove from department"
                                        >
                                            <FaTrash size={14} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex m-2 items-center">
                    <a
                        style={{
                            border: "solid",
>>>>>>> Stashed changes
                            borderWidth: "0px 3px 3px 0px",
                            display: "inline-block",
                            padding: "3px",
                            transform: dropdownState ? "rotate(-135deg)" : "rotate(45deg)",
                        }}
<<<<<<< Updated upstream
                    ></a>
                </div>
            </div>
            {dropdownState && <div className="flex flex-col gap-2">{props.children}</div>}
=======
                    />
                </div>
            </div>

            {dropdownState && <div className="flex flex-col gap-2">{children}</div>}
>>>>>>> Stashed changes
        </div>
    );
}

export default DropdownCard;
