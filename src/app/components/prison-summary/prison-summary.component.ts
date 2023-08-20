import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { DataService } from "src/app/services/data.service";
import { Cell } from "src/app/types";

@Component({
    selector: "app-prison-summary",
    templateUrl: "./prison-summary.component.html",
    styleUrls: ["./prison-summary.component.scss"],
})
export class PrisonSummaryComponent implements OnInit, OnDestroy {
    private occupiedCells: Cell[] = [];
    private dataSub: Subscription | undefined;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataSub = this.dataService.getCellGrid().subscribe((grid) => {
            this.occupiedCells = grid.filter((cell) => cell.inmate !== null);
        });
    }

    ngOnDestroy() {
        this.dataSub?.unsubscribe();
    }

    getNumInmates(): number {
        return this.occupiedCells.length;
    }

    getNumMale(): number {
        return this.occupiedCells.filter((cell) => cell.inmate!.gender === "M")
            .length;
    }

    getNumFemale(): number {
        return this.occupiedCells.filter((cell) => cell.inmate!.gender === "F")
            .length;
    }

    getNumReleasesWithinYear(): number {
        const threshold = new Date();
        threshold.setFullYear(threshold.getFullYear() + 1);
        return this.getNumReleasesWithinDate(threshold);
    }

    getNumReleasesWithinDate(threshold: Date): number {
        return this.occupiedCells.filter(
            (cell) => cell.inmate!.endDate < threshold
        ).length;
    }
}
