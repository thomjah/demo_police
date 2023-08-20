import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Cell } from "src/app/types";

@Component({
    selector: "app-new-inmate-form",
    templateUrl: "./new-inmate-form.component.html",
    styleUrls: ["./new-inmate-form.component.scss"],
})
export class NewInmateFormComponent implements OnInit {
    @Input() cellNo: number | undefined;
    @Input() availableCells!: number[];
    @Output() inmateCreated = new EventEmitter<Cell | null>();

    inmateForm!: FormGroup;



    ngOnInit() {
        this.inmateForm = new FormGroup({
            name: new FormControl("", Validators.required),
            age: new FormControl<number | null>(null, [
                Validators.required,
                Validators.min(18),
                Validators.max(70),
            ]),
            gender: new FormControl("", Validators.required),
            cellNo: new FormControl<number | null>(this.cellNo || null, Validators.required),
            startDate: new FormControl<Date | null>(new Date(), Validators.required),
            endDate: new FormControl<Date | null>(null, Validators.required),
        });

    }

    onCancel() {
        this.inmateCreated.emit(null);
    }

    onSubmit() {
        if (this.inmateForm.valid) {
            const formValues = this.inmateForm.value;
            const cell = this.createCellDataFromFormValues(formValues);
            this.inmateCreated.emit(cell);
        }
    }

    createCellDataFromFormValues(formValues: any): Cell {
        return {
            cellNo: formValues.cellNo,
            inmate: {
                name: formValues.name,
                age: formValues.age,
                gender: formValues.gender,
                startDate: formValues.startDate,
                endDate: formValues.endDate,
            },
        };
    }
}
