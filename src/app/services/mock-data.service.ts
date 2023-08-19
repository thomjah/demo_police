import { Injectable } from "@angular/core";

import { Cell, Inmate } from "../types";

const NAMES: {name: string; gender: "M" | "F"}[] = [
    { name: "Linda Petersen", gender: "F" },
    { name: "Ingvild Løset", gender: "F" },
    { name: "Rebecca Bergesen", gender: "F" },
    { name: "Kaja Eikeland", gender: "F" },
    { name: "Sofia Finstad", gender: "F" },
    { name: "Edel Langfeldt", gender: "F" },
    { name: "Aslaug Olsen", gender: "F" },
    { name: "Kirsten Jensen", gender: "F" },
    { name: "Ingri Munthe", gender: "F" },
    { name: "Annbjørg Rønning", gender: "F" },
    { name: "Therese Nilsen", gender: "F" },
    { name: "Lena Grande", gender: "F" },
    { name: "Anita Hammerstad", gender: "F" },
    { name: "Josefine Henriksen", gender: "F" },
    { name: "Cecilie Fiskerstrand", gender: "F" },
    { name: "Muhammed Ruud", gender: "M" },
    { name: "Tom Williams", gender: "M" },
    { name: "Einar Wold", gender: "M" },
    { name: "Ola Tjelta", gender: "M" },
    { name: "Rolf Bakka", gender: "M" },
    { name: "Jon Jensen", gender: "M" },
    { name: "Olav Klausen", gender: "M" },
    { name: "Kjell Winje", gender: "M" },
    { name: "James Sola", gender: "M" },
    { name: "Svein Holm", gender: "M" },
    { name: "Tommy Sivertsen", gender: "M" },
    { name: "Dagfinn Skjerping", gender: "M" },
    { name: "Rune Olsson", gender: "M" },
    { name: "Steinar Josefsen", gender: "M" },
    { name: "Rolf Lien", gender: "M" },
    { name: "Robin Johansen", gender: "M" },
    { name: "Roald Henriksen", gender: "M" },
    { name: "Eivind Ringnes", gender: "M" },
    { name: "Håkon Haugan", gender: "M" },
    { name: "Jarle Eide", gender: "M" },
    { name: "Jan Vestli", gender: "M" },
    { name: "Andreas Hansen", gender: "M" },
    { name: "Marian Henriksen", gender: "M" },
    { name: "Stian Johansen", gender: "M" },
    { name: "Ronny Mohamed", gender: "M" },
];

const NUM_CELLS = 50;
const OCCUPIED_RANGE = [10, 35];
const DAYS_RANGE = [20, 1500];
const AGE_RANGE = [18, 70];

@Injectable({
    providedIn: "root",
})
export class MockDataService {

    constructor() {}

    createCellGrid(): Cell[] {
        const grid: Cell[] = [];
        for (var i = 1; i <= NUM_CELLS; i++) {
            grid.push({
                cellNo: i,
                inmate: null,
            });
        }
        const numInmates = this.getRandomNumberInRange(OCCUPIED_RANGE);
        this.populateCellGrid(grid, numInmates);
        return grid;
    }

    /**
     * With the given grid, randomly populate numInmates with Inmates.
     * @param grid
     * @param numInmates
     */
    private populateCellGrid(grid: Cell[], numInmates: number) {
        var remaining = numInmates;
        // a copy of NAMES we can edit.
        const names = [...NAMES];
        // Creates a range of 0..(Grid.length-1), which is used to extract cells without replacement.
        const cellIndices = Array.from(
            { length: grid.length },
            (val, idx) => idx
        );
        while (remaining > 0) {
            // Randomly choose an array index from the arrays.
            const nameIdx = Math.floor(Math.random() * names.length);
            const cellIdx = Math.floor(Math.random() * cellIndices.length);
            // Removes the selected data so it cannot be chosen again.
            const [personalia] = names.splice(nameIdx, 1);
            const [gridIdx] = cellIndices.splice(cellIdx, 1);
            grid[gridIdx].inmate = this.createInmate(
                personalia.name,
                personalia.gender
            );
            remaining--;
        }
    }

    private createInmate(name: string, gender: "M" | "F"): Inmate {
        const numDaysInPrison = this.getRandomNumberInRange(DAYS_RANGE);
        return {
            name: name,
            gender: gender,
            age: this.getRandomNumberInRange(AGE_RANGE),
            startDate: this.offsetDays(new Date(), -numDaysInPrison / 2),
            endDate: this.offsetDays(new Date(), +numDaysInPrison / 2),
        }
    }

    /**
     * Given a range array, return a random number within the range (inclusive)
     * @param range Inclusive range - array of two elements.
     * @returns a random number within the range.
     */
    private getRandomNumberInRange(range: number[]): number {
        const min = range[0];
        const max = range[1];
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Create a new Date from the input Date with "offset" days different.
     * @param date The start Date to offset from.
     * @param offset Number of days to move. Positive is forward in time, negative is back in time.
     * @returns a new Date object.
     */
    private offsetDays(date: Date, offset: number): Date {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + offset);
        return newDate;
    }
}
