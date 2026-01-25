import { useEffect, useState } from "react";
import { Company, Department, User, DepartmentRole } from "../types";

const apiLink = "https://devtest-2025-drs-gxbmhsgxbdfje9cv.norwayeast-01.azurewebsites.net";

export function useDepartmentData() {
    const [user, setUser] = useState<User>();
    const [companies, setCompanies] = useState<Company[]>();
    const [departments, setDepartments] = useState<Department[]>();
    const [roles, setRoles] = useState<DepartmentRole[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = () => {
        setLoading(true);
        setError(null);

        fetch(apiLink + "/me")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch user");
                return res.json();
            })
            .then((data) => setUser(data.data))
            .catch((err) => setError(err.message));

        fetch(apiLink + "/company")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch companies");
                return res.json();
            })
            .then((data) => setCompanies(data.data))
            .catch((err) => setError(err.message));

        fetch(apiLink + "/department")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch departments");
                return res.json();
            })
            .then((data) => setDepartments(data.data))
            .catch((err) => setError(err.message));

        fetch(apiLink + "/departmentRole")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch roles");
                return res.json();
            })
            .then((data) => setRoles(data.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addUserToDepartment = (departmentId: number) => {
        if (!user || !roles) return;

        const existingRole = roles.find(
            (r) => r.userId === user.id && r.departmentId === departmentId,
        );

        if (existingRole) return;

        const newRole: DepartmentRole = {
            departmentId,
            userId: user.id,
            role: "Member",
        };

        setRoles([...roles, newRole]);
    };

    const removeUserFromDepartment = (departmentId: number) => {
        if (!user || !roles) return;

        setRoles(roles.filter((r) => !(r.userId === user.id && r.departmentId === departmentId)));
    };

    const setUserAsLeader = (departmentId: number) => {
        if (!user || !roles) return;

        setRoles(
            roles.map((r) =>
                r.userId === user.id && r.departmentId === departmentId
                    ? { ...r, role: "Leader" }
                    : r,
            ),
        );
    };

    const removeUserAsLeader = (departmentId: number) => {
        if (!user || !roles) return;

        setRoles(
            roles.map((r) =>
                r.userId === user.id && r.departmentId === departmentId
                    ? { ...r, role: "Member" }
                    : r,
            ),
        );
    };

    return {
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
    };
}
