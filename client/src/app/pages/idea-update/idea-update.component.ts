import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-idea-update',
  templateUrl: './idea-update.component.html',
  styleUrls: ['./idea-update.component.scss']
})
export class IdeaUpdateComponent implements OnInit {
  user: any;
  ideaForms: any;
  ideaForm: FormGroup;
  hasError: boolean;
  ErrorMassage:string=' Kindly fill all the fields';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  department:any;
  idea_id:any;
  subject:String;
  description: String;
  attachment: any;
  cat_id: String;
  cat_desc: String;
  f_area_id: String;
  f_area_desc:any;
  last_update: any;
  idea_status: any;
  updateby: any;
  userdata: any;
  idea:any;
  cate:any;
  farea:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService,
    public admin: AdminService
  ) { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);  
    this.idea=history.state;
    this.idea_id = this.idea.idea_id;
    this.subject = this.idea.subject;
    this.description = this.idea.description;
    this.cat_id = this.idea.cat_id;
    this.cat_desc = this.idea.cat_desc;
    this.f_area_id = this.idea.f_area_id;
    this.f_area_desc = this.idea.f_area_desc;
    this.last_update= this.idea.last_update;
    this.updateby = this.idea.updateby;
    this.admin.getCategoryList(this.userdata).subscribe(data=>{
      this.cate = data.data;
    })
    this.admin.getFunctionList(this.userdata).subscribe(data=>{
      this.farea = data.data;
    })
  }
  get f() {
    return this.ideaForm.controls;
  }
  submit(form: NgForm) {

    if(form.invalid){
      this.ErrorMassage = 'Kindly fill all the fields'
      this.hasError = true;
      return
  
    }
    form.value['updateby'] = Number(this.userdata.userid);
    form.value['last_update'] = new Date(Date.now() );
    this.hasError = false;
    
    

    this.idea.subject=this.subject,
    this.idea.description=this.description,
    this.idea.cat_id=this.cat_id,
    this.idea.f_area_id=this.f_area_id,
    this.idea.update_by=Number(this.userdata.userid),
    this.idea.last_update=new Date(Date.now() )
    
    


    this.ideasService.getIdeaUpdate(this.idea).subscribe(data => {
      if (data.status){
        this.router.navigateByUrl('/dashboard')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to update idea.';
      }
      // this.ideaForms = data.data;
     
    }); 
}
}