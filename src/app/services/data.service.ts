import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map as obsMap } from "rxjs/operators";

import { Cell, Inmate } from "../types";
import { MockDataService } from "./mock-data.service";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private cellsStream: BehaviorSubject<Cell[]>;

    constructor(private mockData: MockDataService) {
        const generated = this.mockData.createCellGrid();
        this.cellsStream = new BehaviorSubject<Cell[]>(
            generated
        );
    }

    getCellGrid(): Observable<Cell[]> {
        return this.cellsStream;
    }

    /**
     * Get all Cell Numbers that are empty and available.
     */
    getAvailableCellNumbers(): Observable<number[]> {
        return this.cellsStream.pipe(
            obsMap((cells) =>
                cells
                    .filter((cell) => cell.inmate === null)
                    .map((cell) => cell.cellNo)
            )
        );
    }

    addInmate(inmate: Inmate, cellNo: number) {
        // Misses check if the cell is empty.
        this.setCellInmate(inmate, cellNo);
    }

    removeInmate(cellNo: number) {
        // Misses check if the cell is occupied.
        this.setCellInmate(null, cellNo);
    }

    /**
     * An abstraction so that clients must call addInmate and removeInmate.
     */
    private setCellInmate(inmate: Inmate | null, cellNo: number) {
        const grid = this.cellsStream.value;
        const cellIdx = grid.findIndex((cell) => cell.cellNo === cellNo);
        if (cellIdx > -1) {
            const newGrid = [...grid];
            newGrid[cellIdx] = { cellNo, inmate };
            this.cellsStream.next(newGrid);
        }
    }
}
