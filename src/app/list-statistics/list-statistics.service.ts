import { Injectable } from '@angular/core';
import { Statistics } from "./list-statistics"

@Injectable({
    providedIn: 'root',
})
export class ListService {
    getList() : Statistics[] {
        return [
            {
                flagUrl:"https://www.countryflags.io/us/flat/64.png",
                name: "United States",
                caseTotal: "29,202,966",
                recoveredTotal: "19,632,525",
                deathsTotal: "524,670",
                detailInfo: ""
            },
            {
                flagUrl: "https://www.countryflags.io/in/flat/64.png",
                name: "India",
                caseTotal: "11,097,134",
                recoveredTotal: "10,775,169",
                deathsTotal: "157,092",
                detailInfo: ""
            },
            {
                flagUrl: "https://www.countryflags.io/br/flat/64.png",
                name: "Brazil",
                caseTotal: "10,517,232",
                recoveredTotal: "9,386,440",
                deathsTotal: "254,263",
                detailInfo: ""
            },
            {
                flagUrl: "https://www.countryflags.io/ru/flat/64.png",
                name: "Russia",
                caseTotal: "4,246,079",
                recoveredTotal: "3,811,797",
                deathsTotal: "86,122",
                detailInfo: ""
            }, 
            {
                flagUrl: "https://www.countryflags.io/gb/flat/64.png",
                name: "UK",
                caseTotal: "4,246,079",
                recoveredTotal: "2,846,208",
                deathsTotal: "122,705",
                detailInfo: ""
            },
            {
                flagUrl: "https://www.countryflags.io/fr/flat/64.png",
                name: "France",
                caseTotal: "3,736,016",
                recoveredTotal: "254,868",
                deathsTotal: "86,332",
                detailInfo: "rrrr"
            },
            {
                flagUrl: "https://www.countryflags.io/es/flat/64.png",
                name: "Spain",
                caseTotal: "3,188,553",
                recoveredTotal: "2,647,446",
                deathsTotal: "69,142",
                detailInfo: "gggg"
            },
            {
                flagUrl: "https://www.countryflags.io/it/flat/64.png",
                name: "Italy",
                caseTotal: "2,907,825",
                recoveredTotal: "2,398,352",
                deathsTotal: "97,507",
                detailInfo: "jjjj"
            },
            {
                flagUrl: "https://www.countryflags.io/tr/flat/64.png",
                name: "Turkey",
                caseTotal: "2,693,164",
                recoveredTotal: "2,565,723",
                deathsTotal: "28,503",
                detailInfo: "45k"
            },
            {
                flagUrl: "https://www.countryflags.io/de/flat/64.png",
                name: "Germany",
                caseTotal: "2,444,303",
                recoveredTotal: "2,248,400",
                deathsTotal: "70,608",
                detailInfo: "445k"
            },
    
        ];
    }
}