export interface Company {
    id: number;
    name: string;
    address?: string;
}

export interface Department {
    id: number;
    companyId: number;
    name: string;
}

export interface User {
    id: number;
    name: string;
    email?: string;
}

export interface DepartmentRole {
    departmentId: number;
    userId: number;
    role?: string;
}
