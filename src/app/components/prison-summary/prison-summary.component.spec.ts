import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { PrisonSummaryComponent } from "./prison-summary.component";
import { Cell, createCell, createInmate } from "../../types";
import { DataService } from "src/app/services/data.service";
import { MatCardModule } from "@angular/material/card";

function createDummyData(): Cell[] {
    return [
        createCell(1, null),
        createCell(2, createInmate("Alice", 38, "F", new Date(2023, 4, 15), new Date(2023, 11, 1))),
        createCell(3, createInmate("Bob", 41, "M", new Date(2023, 5, 15), new Date(2026, 10, 12))),
        createCell(4, null),
        createCell(5, createInmate("Carole", 27, "F", new Date(2022, 11, 5), new Date(2024, 1, 20))),
        createCell(6, createInmate("Daryl", 55, "M", new Date(2023, 6, 13), new Date(2023, 10, 10))),
        createCell(7, createInmate("Eric", 24, "M", new Date(2023, 4, 18), new Date(2027, 5, 11))),
    ];
}

function createMockedDataService() {
    const serviceSpy = jasmine.createSpyObj("DataService", ["getCellGrid"]);
    const response = of(createDummyData());
    serviceSpy.getCellGrid.and.returnValue(response);
    return serviceSpy;
}

describe("PrisonSummaryComponent", () => {
    let component: PrisonSummaryComponent;
    let fixture: ComponentFixture<PrisonSummaryComponent>;

    beforeEach(() => {
        const dataService = createMockedDataService();
        TestBed.configureTestingModule({
            declarations: [PrisonSummaryComponent],
            imports: [MatCardModule],
            providers: [
                {provide: DataService, useValue: dataService }
            ],
        });
        fixture = TestBed.createComponent(PrisonSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should count total inmates", () => {
        const numInmates = component.getNumInmates();
        expect(numInmates).toBe(5);
    });

    it("should count male inmates", () => {
        const numMale = component.getNumMale();
        expect(numMale).toBe(3);
    });

    it("should count female inmates", () => {
        const numFemale = component.getNumFemale();
        expect(numFemale).toBe(2);
    });

    it("should count release number", () => {
        const yearAhead = new Date(2024, 7, 20);
        const numInmates = component.getNumReleasesWithinDate(yearAhead);
        expect(numInmates).toBe(3);
    });
});
