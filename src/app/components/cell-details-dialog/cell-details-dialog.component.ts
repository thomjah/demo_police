import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Cell } from "src/app/types";
import { DataService } from "src/app/services/data.service";

const GENDER_DISPLAY_MAP = {
    M: "Mann",
    F: "Kvinne",
};

@Component({
    selector: "app-cell-details-dialog",
    templateUrl: "./cell-details-dialog.component.html",
    styleUrls: ["./cell-details-dialog.component.scss"],
})
export class CellDetailsDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CellDetailsDialogComponent>,
        private dataService: DataService,
        @Inject(MAT_DIALOG_DATA) public data: Cell
    ) {}

    isOccupied(): boolean {
        return this.data.inmate !== null;
    }

    getGenderDisplayValue(): string {
        return GENDER_DISPLAY_MAP[this.data.inmate!.gender] || "";
    }

    getDateDisplayValue(date: Date): string {
        return date.toLocaleDateString();
    }

    onClose() {
        this.dialogRef.close();
    }

    onRelease() {
        this.dataService.removeInmate(this.data.cellNo);
        this.dialogRef.close();
    }

    onAdd() {}
}
