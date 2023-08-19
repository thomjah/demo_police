import { Component, Input } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { CellDetailsDialogComponent } from "../cell-details-dialog/cell-details-dialog.component";
import { Cell } from "src/app/types";

@Component({
    selector: "app-grid-cell",
    templateUrl: "./grid-cell.component.html",
    styleUrls: ["./grid-cell.component.scss"],
})
export class GridCellComponent {
    @Input() cell!: Cell;

    constructor(
        private dialog: MatDialog,
    ) {}

    isOccupied(): boolean {
        return this.cell.inmate !== null;
    }

    onClick() {
        const dialogRef = this.dialog.open(CellDetailsDialogComponent, {
            data: this.cell,
        });
    }
}
