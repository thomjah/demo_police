import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Cell } from "src/app/types";

@Component({
    selector: "app-new-inmate-form",
    templateUrl: "./new-inmate-form.component.html",
    styleUrls: ["./new-inmate-form.component.scss"],
})
export class NewInmateFormComponent {

    @Input() cellNo: number | undefined;
    @Input() availableCells!: number[];
    @Output() inmateCreated = new EventEmitter<Cell | null>();
}
