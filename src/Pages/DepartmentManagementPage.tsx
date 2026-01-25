import { useEffect, useState } from "react";
import UserProfile from "../Organisms/UserProfile";
import CompanyList from "../Organisms/CompanyList";
import { useDepartmentData } from "../hooks/useDepartmentData";
import { Company, Department, User, DepartmentRole } from "../types";
import DropdownCard from "../Molecules/dropdownCard";
import Lable from "../Atoms/lable";
import Divider from "../Atoms/divider";
import Searchbar from "../Atoms/Searchbar";

function DepartmentManagementPage() {
    const {
        user,
        companies,
        departments,
        roles,
        loading,
        error,
        addUserToDepartment,
        removeUserFromDepartment,
        setUserAsLeader,
        removeUserAsLeader,
    } = useDepartmentData();

    if (loading || !user || !companies || !departments || !roles) {
        return (
            <div
                className="flex flex-col items-center justify-center h-screen"
                style={{ backgroundColor: "#1f232B" }}
            >
                <p style={{ color: "white" }}>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div
                className="flex flex-col items-center justify-center h-screen"
                style={{ backgroundColor: "#1f232B" }}
            >
                <p style={{ color: "white" }}>{`Error: ${error}`}</p>
            </div>
        );
    }

    return (
        <div className="flex w-full justify-center h-screen" style={{ backgroundColor: "#1f232B" }}>
            <UserProfile user={user} />

            <div className="flex w-1/3 m-2 gap-2">
                <DropdownCard
                    company={"CATCH MEDIA AS"}
                    department={[{ id: 0, companyId: 0, name: "DIGITAL", role: "Leader" }]}
                    color="white"
                >
                    <Lable text="DESIGN" color="white" background={true} />
                    <Lable text="MARKEDSFØRING" color="white" background={true} />
                    <Divider color="#32363f" />
                    <Searchbar placeholder="Søk..." color="white" onSearch={() => {}} />
                    <Lable text="ANNEN BEDRIFT MED FLERE AVD" color="white" />
                    <Lable text="AVDELING 1 (LEDER)" color="white" isLeader background={true} />
                    <Lable text="AVDELING 2" color="white" background={true} />
                    <Divider color="#32363f" />
                    <Lable text="BEDRIFT ÉN AVD MEKANIKER" color="white" background={true} />
                    <Divider color="#32363f" />
                    <Lable text="BEDRIFT KUN DEFAULT" color="white" background={true} />
                </DropdownCard>
            </div>
            <CompanyList
                companies={companies}
                departments={departments}
                roles={roles}
                userId={user.id}
                onAddDepartment={addUserToDepartment}
                onRemoveDepartment={removeUserFromDepartment}
                onSetLeader={setUserAsLeader}
                onRemoveLeader={removeUserAsLeader}
            />
        </div>
    );
}

export default DepartmentManagementPage;
