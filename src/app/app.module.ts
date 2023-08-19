import { NgModule, LOCALE_ID } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

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
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
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
