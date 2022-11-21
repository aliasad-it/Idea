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
  }
 
  

  getIdeaList(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/ideas/getIdeasList' , userdata );
  }

  IdeaList(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/ideas/IdeasList' , userdata );
  }

  PresentTo(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/ideas/PresentTo' , userdata );
  }

  getSaveIdea(newidea: any, image:any): Observable<any> {

    newidea.roles = [3]; // Manager
    newidea.last_update = new Date(Date.now() );
    newidea.idea_status = 'New';
    newidea.present_to = '1st Level Reviewer';
    newidea.pic = image;
    const formData: FormData = new FormData();
    formData.append('file',image,image.name);
    newidea.file = formData;
    console.log(newidea);
    
    return this.http.post(GLOBAL.serviceUrl + '/ideas/saveIdea', newidea);
  }
  
  getIdeaUpdate(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/ideas/getIdeasUpdate' , userdata );
  }

  SelectIdea(idea_id:any): Observable<any> {
    
    return this.http.get(GLOBAL.serviceUrl + '/ideas/SelectIdea/' + idea_id );
  }
  getAllUsers(): Observable<any> {
    
    return this.http.get(GLOBAL.serviceUrl + '/user/getAllUsers');
  }
}
