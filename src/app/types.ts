export interface Inmate {
    name: string;
    age: number;
    gender: "M" | "F";
    startDate: Date;
    endDate: Date;
}

export interface Cell {
    cellNo: number;
    inmate: Inmate | null;
}
