import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NewInmateDialogComponent } from "../new-inmate-dialog/new-inmate-dialog.component";

@Component({
    selector: "app-control-panel",
    templateUrl: "./control-panel.component.html",
    styleUrls: ["./control-panel.component.scss"],
})
export class ControlPanelComponent {

    constructor(
        private dialog: MatDialog,
    ) {}

    onAdd() {
        this.dialog.open(NewInmateDialogComponent, {
            data: {cellNo: undefined}
        });
    }
}
