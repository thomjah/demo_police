import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";

import { DataService } from "src/app/services/data.service";
import { Cell } from "src/app/types";

interface DialogData {
    cellNo: number | undefined;
}

@Component({
    selector: "app-new-inmate-dialog",
    templateUrl: "./new-inmate-dialog.component.html",
    styleUrls: ["./new-inmate-dialog.component.scss"],
})
export class NewInmateDialogComponent implements OnInit, OnDestroy {
    public availableCells: number[] = [];
    private cellListSub: Subscription | undefined;

    constructor(
        public dialogRef: MatDialogRef<NewInmateDialogComponent>,
        private dataService: DataService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    ngOnInit() {
        this.cellListSub = this.dataService
            .getAvailableCellNumbers()
            .subscribe((list) => {
                this.availableCells = list;
            });
    }

    ngOnDestroy() {
        this.cellListSub?.unsubscribe();
    }

    onInmateCreated(data: Cell | null) {
        if (data && data.inmate) {
            this.dataService.addInmate(data.inmate, data.cellNo);
        }
        this.dialogRef.close();
    }
}
