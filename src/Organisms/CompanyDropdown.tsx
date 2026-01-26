import { useState, useEffect } from "react";
import DropdownCard from "../Molecules/DropdownCard";
import Searchbar from "../Atoms/Searchbar";
import Lable from "../Atoms/Lable";
import { Department } from "../types";

interface Props {
    company: { id: number; name: string };
    userDepartments: (Department & { role?: string })[];
    onAddDepartment: (departmentId: number) => void;
    onRemoveDepartment: (departmentId: number) => void;
    onSetLeader: (departmentId: number) => void;
    onRemoveLeader: (departmentId: number) => void;
}

function CompanyDropdown({
    company,
    userDepartments,
    onAddDepartment,
    onRemoveDepartment,
    onSetLeader,
    onRemoveLeader,
}: Props) {
    const userDepts = userDepartments.filter((d) => d.role);
    const otherDepts = userDepartments.filter((d) => !d.role);
    const [filteredDepartments, setFilteredDepartments] = useState(otherDepts);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const filtered = otherDepts.filter((d) =>
            d.name.toLowerCase().includes(searchInput.toLowerCase()),
        );
        setFilteredDepartments(filtered);
    }, [userDepartments, searchInput]);

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    return (
        <DropdownCard
            color="white"
            company={company.name}
            department={userDepts}
            onRemoveDepartment={onRemoveDepartment}
            onSetLeader={onSetLeader}
            onRemoveLeader={onRemoveLeader}
        >
            <div className="flex flex-col gap-2 mt-2">
                <Searchbar placeholder="Søk..." color="white" onSearch={handleSearch} />
                {filteredDepartments.map((dept) => (
                    <div
                        key={dept.id}
                        className="cursor-pointer hover:opacity-80"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddDepartment(dept.id);
                        }}
                    >
                        <Lable
                            text={dept.name}
                            isLeader={dept.role === "Leader"}
                            color="white"
                            background={true}
                        />
                    </div>
                ))}
            </div>
        </DropdownCard>
    );
}

export default CompanyDropdown;
