import { NgModule, LOCALE_ID } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { AppComponent } from "./app.component";
import { ControlPanelComponent } from "./components/control-panel/control-panel.component";
import { NewInmateDialogComponent } from "./components/new-inmate-dialog/new-inmate-dialog.component";
import { NewInmateFormComponent } from "./components/new-inmate-form/new-inmate-form.component";
import { PrisonGridComponent } from "./components/prison-grid/prison-grid.component";
import { GridCellComponent } from "./components/grid-cell/grid-cell.component";
import { CellDetailsDialogComponent } from "./components/cell-details-dialog/cell-details-dialog.component";
import { PrisonSummaryComponent } from "./components/prison-summary/prison-summary.component";

@NgModule({
    declarations: [
        AppComponent,
        ControlPanelComponent,
        NewInmateDialogComponent,
        NewInmateFormComponent,
        PrisonGridComponent,
        GridCellComponent,
        CellDetailsDialogComponent,
        PrisonSummaryComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "nb-NO",
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
