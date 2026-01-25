<<<<<<< Updated upstream
export interface Department {
    name: string;
    isLeader: boolean;
}

export interface Firm {
    id: number;
    name: string;
    department: Department[];
=======
export interface Company {
    id: number;
    name: string;
    address?: string;
}

export interface Department {
    id: number;
    companyId: number;
    name: string;
>>>>>>> Stashed changes
}

export interface User {
    id: number;
    name: string;
<<<<<<< Updated upstream
    email: string;
    firms: Firm[];
}

export interface Companies {
    id: number;
    name: string;
    departments: string[];
=======
    email?: string;
}

export interface DepartmentRole {
    departmentId: number;
    userId: number;
    role?: string;
>>>>>>> Stashed changes
}
