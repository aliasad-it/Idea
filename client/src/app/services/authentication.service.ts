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
 
  

  login(email: string, password: string): Observable<any> {
    let user1 = {
      "email": email, "password":password
    }
    console.log("Authentication service ", user1);
    return this.http.post(GLOBAL.serviceUrl + '/user/authentication' , user1 );
  }

  ChangePass(password: string): Observable<any> {
    let user1 = {
      "password":password
    }
    console.log("Authentication service ", user1);
    return this.http.post(GLOBAL.serviceUrl + '/user/authentication' , user1 );
  }

  getProfile(userid: string): Observable<any> {
  
    console.log("Authentication service ", userid);
    return this.http.post(GLOBAL.serviceUrl + '/user/profile' , {userid:userid} );
  }

  createUser(user: UserModel): Observable<any> {
    user.roles = [2]; // Manager
    user.authToken = 'auth-token-' + Math.random();
    user.refreshToken = 'auth-token-' + Math.random();
    // user.authToken= 'auth-token-6829bba69dd3421d8762-991e9e806dbf';
    // user.refreshToken= 'auth-token-f8e4c61a318e4d618b6c199ef96b9e55';
    user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
    user.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/user/registerUser', user);
  }

    // login(email: string, password: string): Observable<any> {
    // const notFoundError = new Error('Not Found');
    // if (!email || !password) {
    //   return of(notFoundError);
    // }
   
    // return this.http.post(GLOBAL.serviceUrl + '/user/authentication' , user1 ).pipe(
    //     map((result: UserModel[]) => {
    //       if (result.length <= 0) {
    //         return notFoundError;
    //       }
  
    //       const user = result.find((u) => {
    //         return (
    //           u.email.toLowerCase() === email.toLowerCase() &&
    //           u.password === password
    //         );
    //       });
    //       if (!user) {
    //         return notFoundError;
    //       }
  
    //       const auth = new AuthModel();
    //       auth.authToken = user.authToken;
    //       auth.refreshToken = user.refreshToken;
    //       auth.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
    //       return auth;
    //     })
    //   );

  

}