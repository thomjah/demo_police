import { TestBed } from "@angular/core/testing";

import { MockDataService } from "./mock-data.service";
import { Cell } from "../types";

describe("MockDataService", () => {
    let service: MockDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MockDataService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("Should offset days", () => {
        const startDate = new Date(2023, 7, 20);  // 20th Aug
        const result1: Date = (service as any).offsetDays(startDate, 15);
        expect(result1.getMonth()).toBe(8);
        expect(result1.getDate()).toBe(4);
        const result2: Date = (service as any).offsetDays(startDate, -8);
        expect(result2.getMonth()).toBe(7);
        expect(result2.getDate()).toBe(12);
    });

    it("should populate N cells", () => {
        const N = 14;
        const grid: Cell[] = Array.from(
            { length: 30 },
            (val, idx) => ({cellNo: idx, inmate: null})
        );
        (service as any).populateCellGrid(grid, N);
        const numOccupied = grid.filter(
            (cell) => cell.inmate !== null
        ).length;
        expect(numOccupied).toBe(N);
    })
});
