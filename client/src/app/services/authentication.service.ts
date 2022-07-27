import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as GLOBAL from '../global';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../modules/auth';
import { AuthModel } from '../modules/auth/models/auth.model'; 
import { AuthHTTPService } from '../modules/auth/services/auth-http'; 
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
  assets:any ;
  constructor(public http: HttpClient ) {
    console.log('Authentication Service Initialized...');
    
  }
 
  

  getAuthentication(userdata: any): Observable<any> {
    console.log("Authentication service ", userdata);
    return this.http.post(GLOBAL.serviceUrl + '/user/authentication' , userdata );
  }

  

}