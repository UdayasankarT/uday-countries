import { HttpserviceService } from './../https-sevice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StateListComponent } from '../state-list/state-list.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryList;
  countryData;
  constructor(private http : HttpClient, private getCountries: HttpserviceService ) { }

  country = {
    country:''
  }

  ngOnInit(): void {
    this.http.get('http://vocab.nic.in/rest.php/country/json')
    .subscribe(Response => {
      console.log(Response);
      this.countryList=Response;
    });
  }
  // let myCompObj = new StateListComponent(HttpClient);
  getData(countryName)
   {
    this.country.country = countryName
    this.http.post<any>('https://countriesnow.space/api/v0.1/countries/states', this.country ).subscribe(data => {
      this.countryData = data.data.states;
    })
  }
  }
