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

  getSaveIdeaFile(newidea: any, image:any): Observable<any> {

    newidea.roles = [3]; // Manager
    newidea.last_update = new Date();
    newidea.idea_status = 'New';
    newidea.present_to = '1st Level Reviewer';
    //newidea.pic = image;
    let formData: FormData = new FormData();
    formData.append('file',image);
    formData.append('roles',newidea.roles);
    formData.append('last_update',newidea.last_update);
    formData.append('idea_status',newidea.idea_status);
    formData.append('present_to',newidea.present_to);
    formData.append('subject',newidea.subject);
    formData.append('description',newidea.description);
    formData.append('cat_id',newidea.cat_id);
    formData.append('updateby',newidea.updateby);
    formData.append('f_area_id',newidea.f_area_id);
    console.log('file upload',image.name ,formData);
    //newidea.file = formData;
    console.log(formData);
    
    return this.http.post(GLOBAL.serviceUrl + '/ideas/saveIdeaFile', formData);
  }

  getSaveIdea(newidea: any): Observable<any> {

    newidea.roles = [3]; // Manager
    newidea.last_update = new Date();
    newidea.idea_status = 'New';
    newidea.present_to = '1st Level Reviewer';
    
    
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
