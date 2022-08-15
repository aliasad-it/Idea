import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as GLOBAL from '../global';


@Injectable({
    providedIn: 'root'
})
export class AdminService {
  assets:any ;
  constructor(public http: HttpClient ) {
    console.log('Admin Service Initialized...');
  }
 
  getAddCat(addcat: any): Observable<any> {

    addcat.roles = [4]; // Manager
    console.log("Add cat service ", addcat);
    addcat.last_update = new Date(Date.now() );
    
    

    addcat.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/admin/addCat', addcat);
  }

  getAddFarea(addfarea: any): Observable<any> {

    addfarea.roles = [4]; // Manager
    console.log("Add Farea service ", addfarea);
    addfarea.last_update = new Date(Date.now() );
    
    

    addfarea.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/admin/addFarea', addfarea);
  }

}