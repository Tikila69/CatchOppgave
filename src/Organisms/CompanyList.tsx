import CompanyDropdown from "./CompanyDropdown";
import Divider from "../Atoms/divider";
import { Company, Department, DepartmentRole } from "../types";

interface Props {
    companies: Company[];
    departments: Department[];
    roles: DepartmentRole[];
    userId: number;
    onAddDepartment: (departmentId: number) => void;
    onRemoveDepartment: (departmentId: number) => void;
    onSetLeader: (departmentId: number) => void;
    onRemoveLeader: (departmentId: number) => void;
}

function CompanyList({
    companies,
    departments,
    roles,
    userId,
    onAddDepartment,
    onRemoveDepartment,
    onSetLeader,
    onRemoveLeader,
}: Props) {
    return (
        <div className="w-1/3 m-2 gap-2">
            {companies.map((company) => {
                const companyDepartments = departments.filter(
                    (d: Department) => d.companyId === company.id,
                );

                const userDepartments = companyDepartments.map((dept: Department) => {
                    const role = roles.find(
                        (r) => r.userId === userId && r.departmentId === dept.id,
                    );

                    return { ...dept, role: role?.role };
                });

                return (
                    <div key={company.id} className="w-full gap-2">
                        <CompanyDropdown
                            company={company}
                            userDepartments={userDepartments}
                            onAddDepartment={onAddDepartment}
                            onRemoveDepartment={onRemoveDepartment}
                            onSetLeader={onSetLeader}
                            onRemoveLeader={onRemoveLeader}
                        />
                        <Divider color="#32363f" />
                    </div>
                );
            })}
        </div>
    );
}

export default CompanyList;
