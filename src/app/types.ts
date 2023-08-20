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

export function createInmate(
    name: string,
    age: number,
    gender: "M" | "F",
    startDate: Date,
    endDate: Date
): Inmate {
    return {
        name, age, gender, startDate, endDate
    };
}

export function createCell(
    cellNo: number,
    inmate: Inmate | null
): Cell {
    return {
        cellNo, inmate
    };
}
