import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country.model';

@Component({
	selector: 'app-countries',
	templateUrl: './countries.component.html',
	styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
	countries$: Observable<any> = of([]);
	countryList: Country[] = [];
	readonly url: string = "https://restcountries.eu/rest/v2/all";
	constructor(public httpClient: HttpClient) { }


	ngOnInit(): void {
		this.countries$ = this.httpClient.get<any>(this.url)
			.pipe(
				map((array: any[]) => {
					return array.map((item: any) => {
						let country: Country = {
							name: item.name,
							flag: item.flag,
							capital: item.capital,
							region: item.region,
							languages: item.languages.map((x: any) => x.name)
						}
						return country;
					}).slice(0,10)
				}));

		this.countries$.subscribe((resp: any) => {
			this.countryList = resp;
			console.log(resp);
		})

	}

}
