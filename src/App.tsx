<<<<<<< Updated upstream
import { ReactNode, useEffect, useState } from "react";
import "./App.css";
import Divider from "./Atoms/divider";
import DropdownCard from "./Molecules/dropdownCard";
import Lable from "./Atoms/lable";
import Searchbar from "./Molecules/Searchbar";
import { CiUser } from "react-icons/ci";
import { User, Firm, Companies } from "./types";

function App() {
    const [user, setUser] = useState<User>();
    const [company, setCompany] = useState<Companies>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    function handleSearch(input: stirng) {
        return company?.departments.filter((nme) => nme == input);
    }

    useEffect(() => {
        setLoading(true);

        fetch("https://devtest-2025-drs-gxbmhsgxbdfje9cv.norwayeast-01.azurewebsites.net/me")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch user");
                return res.json();
            })
            .then((data) => {
                setUser(data.data);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });

        fetch("https://devtest-2025-drs-gxbmhsgxbdfje9cv.norwayeast-01.azurewebsites.net/company/1")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch user");
                return res.json();
            })
            .then((data) => {
                setCompany(data.data);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    console.log("company data;", company);

    if (loading || user === undefined || company === undefined) {
        return (
            <div
                className="flex flex-col items-center justify-center h-screen"
                style={{ backgroundColor: "#1f232B" }}
            >
                <Lable text="Loading...." color="white" />
            </div>
        );
    } else if (error) {
        return (
            <div
                className="flex flex-col items-center justify-center h-screen"
                style={{ backgroundColor: "#1f232B" }}
            >
                <Lable text="Ooops, something went wrong. Please do better..." color="white" />
            </div>
        );
    } else {
        console.log("app", user);
        return (
            <div
                className="flex flex-row justify-center h-screen"
                style={{ backgroundColor: "#1f232B" }}
            >
                <div className="absolute flex left-0 items-center p-2 h-fit m-2">
                    <CiUser color="white" size={"2em"} />
                    <div className="p-1">
                        <Lable text={user.name} color="white" fontSize="small" />
                        <Lable text={user.email} color="white" fontSize="small" />
                    </div>
                </div>
                <div className=" flex w-1/3 m-2 gap-2">
                    <DropdownCard
                        firm={"CATCH MEDIA AS"}
                        department={[{ name: "DIGITAL", isLeader: true }]}
                        color="white"
                        isLeader
                    >
                        <Lable text="DESIGN" color="white" background={true} />
                        <Lable text="MARKEDSFØRING" color="white" background={true} />
                        <Divider color="#32363f" />
                        <Searchbar placeholder="Søk..." color="white" />
                        <Lable text="ANNEN BEDRIFT MED FLERE AVD" color="white" />
                        <Lable text="AVDELING 1 (LEDER)" color="white" background={true} isLeader />
                        <Lable text="AVDELING 2" color="white" background={true} />
                        <Divider color="#32363f" />
                        <Lable text="BEDRIFT ÉN AVD MEKANIKER" color="white" background={true} />
                        <Divider color="#32363f" />
                        <Lable text="BEDRIFT KUN DEFAULT" color="white" background={true} />
                    </DropdownCard>
                </div>

                <div className="w-1/3 m-2 gap-2">
                    {user.firms.map((firm: Firm) => (
                        <div key={firm.id} className="w-full gap-2">
                            <DropdownCard
                                firm={firm.name}
                                department={firm.department}
                                color="white"
                            >
                                <div className="flex flex-col gap-2 mt-2">
                                    <Searchbar placeholder="Søk..." color="white" />
                                    {company.departments.map((name) => (
                                        <Lable text={name} />
                                    ))}
                                </div>
                            </DropdownCard>
                            <Divider color="#32363f" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
=======
import "./App.css";
import Divider from "./Atoms/divider";
import Lable from "./Atoms/lable";
import Searchbar from "./Atoms/Searchbar";
import DropdownCard from "./Molecules/dropdownCard";
import DepartmentManagementPage from "./Pages/DepartmentManagementPage";
import { useDepartmentData } from "./hooks/useDepartmentData";
import UserProfile from "./Organisms/UserProfile";

function App() {
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

    return (
        <div style={{ backgroundColor: "#1f232B" }}>
            <DepartmentManagementPage />
        </div>
    );
>>>>>>> Stashed changes
}

export default App;
