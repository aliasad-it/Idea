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
    
  }
 
  

  login(email: string, password: string): Observable<any> {
    let user1 = {
      "email": email, "password":password
    }
    return this.http.post(GLOBAL.serviceUrl + '/user/authentication' , user1 );
  }

  ChangePass(userid:number,password: string): Observable<any> {
    let user1 = {
      "userid":userid,
      "password":password
    }
    return this.http.post(GLOBAL.serviceUrl + '/user/password' , user1 );
  }

  getProfile(userid: string): Observable<any> {
  
    return this.http.post(GLOBAL.serviceUrl + '/user/profile' , {userid:userid} );
  }

  getUser(userid: string): Observable<any> {
  
    return this.http.post(GLOBAL.serviceUrl + '/user/getUser' , {userid:userid} );
  }
  
  getAllUsers(): Observable<any> {
  
    return this.http.get(GLOBAL.serviceUrl + '/user/getAllUsers');
  }
  
  
  createUser(user: UserModel): Observable<any> {
    user.roles = [2]; // Manager
    user.authToken = 'auth-token-' + Math.random();
    user.refreshToken = 'auth-token-' + Math.random();
    // user.roleid='3';
    // user.authToken= 'auth-token-6829bba69dd3421d8762-991e9e806dbf';
    // user.refreshToken= 'auth-token-f8e4c61a318e4d618b6c199ef96b9e55';
    user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
    user.pic = './assets/media/avatars/300-1.jpg';
    
    return this.http.post(GLOBAL.serviceUrl + '/user/registerUser', user);
  }
  
  verifyEmail(confirmEmail:any,userid:any){
    let confirm_email = {
      "userid":userid,
      "confirmEmail":confirmEmail
    }
    return this.http.post(GLOBAL.serviceUrl + '/user/verifyEmail', confirm_email);
  }
  
  updateUser(name:string,email:string,phone:string,userid:number,roleid:number): Observable<any> {
    let user = {
      "email": email,
      "name":name,
      "phone":phone,
      "update_by":userid,
      "roleid":roleid
    }
    
    return this.http.post(GLOBAL.serviceUrl + '/user/updateUser', user);
  }
  
  getRoles(): Observable<any> {
  
    return this.http.get(GLOBAL.serviceUrl + '/user/getRoles');
  }

  addRole(userdata: any): Observable<any> {
    return this.http.post(GLOBAL.serviceUrl + '/user/addRole' , userdata );
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