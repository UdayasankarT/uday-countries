import { HttpserviceService } from './../https-sevice.service';
import { CountryListComponent } from './../country-list/country-list.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  constructor(private http: HttpClient, private HttpserviceService: HttpserviceService) { 
    
  }

  ngOnInit(): void {
  }
  countryData;
  country = {
    country:''
  }
  getData(countryName) {
    this.country.country = countryName
    console.log(countryName)
    this.HttpserviceService.getData('https://countriesnow.space/api/v0.1/countries/states', this.country ).subscribe(data => {
      this.countryData = data;
      console.log(data)
    })
  }
}
