import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as GLOBAL from '../global';



@Injectable({
    providedIn: 'root'
})
export class IdeaService {
  assets:any ;
  constructor(public http: HttpClient ) {
    console.log('Idea Service Initialized...');
  }
 
  

  getIdeaList(userdata: any): Observable<any> {
    console.log("Idea list service ", userdata);
    return this.http.post(GLOBAL.serviceUrl + '/ideas/getIdeasList' , userdata );
  }



}