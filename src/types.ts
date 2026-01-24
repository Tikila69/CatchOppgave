export interface Department {
    name: string;
    isLeader: boolean;
}

export interface Firm {
    id: number;
    name: string;
    department: Department[];
}

export interface User {
    id: number;
    name: string;
    email: string;
    firms: Firm[];
}

export interface Companies {
    id: number;
    name: string;
    departments: string[];
}
