import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { DataService } from "src/app/services/data.service";
import { Cell } from "src/app/types";

@Component({
    selector: "app-prison-grid",
    templateUrl: "./prison-grid.component.html",
    styleUrls: ["./prison-grid.component.scss"],
})
export class PrisonGridComponent implements OnInit, OnDestroy {

    cells!: Cell[];
    private dataSub: Subscription | undefined;

    constructor(
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.dataSub = this.dataService.getCellGrid().subscribe((grid) => {
            this.cells = grid;
        });
    }

    ngOnDestroy() {
        this.dataSub?.unsubscribe();
    }
}
