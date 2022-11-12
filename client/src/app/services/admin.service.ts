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
    ('Admin Service Initialized...');
  }
 
  getAddCat(addcat: any): Observable<any> {

    addcat.roles = [4]; // Manager
    addcat.last_update = new Date(Date.now() );
    
    

    addcat.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/admin/addCat', addcat);
  }

  getAddFarea(addfarea: any): Observable<any> {

    addfarea.roles = [4]; // Manager
    addfarea.last_update = new Date(Date.now() );
    
    

    addfarea.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/admin/addFarea', addfarea);
  }

  getAddCriteria(addcriteria: any): Observable<any> {

    addcriteria.roles = [4]; // Manager
    addcriteria.last_update = new Date(Date.now() );
    
    

    addcriteria.pic = './assets/media/avatars/300-1.jpg';
 
  
  
    return this.http.post(GLOBAL.serviceUrl + '/admin/addCriteria', addcriteria);
  }

  getCategoryList(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getCategoryList' , userdata );
  }
  getCategoryUpdate(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getCategoryUpdate' , userdata );
  }

  getCriteriaList(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getCriteriaList' , userdata );
  }
  getCriteriaUpdate(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getCriteriaUpdate' , userdata );
  }

  getFunctionList(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getFunctionList' , userdata );
  }
  getFareaUpdate(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getFareaUpdate' , userdata );
  }
  getWorkFlows(userdata: any): Observable<any> {
    
    return this.http.post(GLOBAL.serviceUrl + '/admin/getWorkFlows' , userdata );
  }
  SaveWorkflow(workflow: any): Observable<any> {
    return this.http.post(GLOBAL.serviceUrl + '/admin/saveWorkflow', workflow);
  }
  updateWorkflow(workflow: any,wf_id:any): Observable<any> {
    return this.http.post(GLOBAL.serviceUrl + '/admin/updateWorkflow/' + wf_id, workflow);
  }
  getWrkflow(wflowid: any): Observable<any> {
    return this.http.get(GLOBAL.serviceUrl + '/admin/getWorkflow/'+ wflowid);
  }
  getReviewList(idea_id:any, userid:any): Observable<any> {
    
    return this.http.get(GLOBAL.serviceUrl + '/admin/getReviewList/' + idea_id+'/'+userid );
  }
  SaveReview(reviews:any): Observable<any> {
   
   
    return this.http.post(GLOBAL.serviceUrl + '/admin/SaveReview',  reviews );
  }
  updateReview(review: any): Observable<any> {
    return this.http.post(GLOBAL.serviceUrl + '/admin/updateReview', review);
  }
  getCriteria(): Observable<any> {
    return this.http.get(GLOBAL.serviceUrl + '/admin/getCriteria');
  }
}