import { StateListComponent } from './state-list/state-list.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

 

  constructor(private http : HttpClient ) { 

 

  }
  get(url){
    let baseurl =  url;
    return this.http.get(baseurl);
  }

 

  getData(url,data){
    let baseurl = environment.stateApi + url;
    return this.http.post(baseurl, data);
  }
}
 