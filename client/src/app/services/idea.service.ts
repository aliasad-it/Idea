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

  getSaveIdea(newidea: any): Observable<any> {

    newidea.roles = [3]; // Manager
    console.log("New Idea service ", newidea);
    newidea.last_update = new Date(Date.now() );
    newidea.idea_status = 'New';
    

    newidea.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/ideas/saveIdea', newidea);
  }

}