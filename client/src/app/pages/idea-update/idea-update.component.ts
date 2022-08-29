import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';

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
  f_area_id: String;
  f_area_desc:any;
  last_update: any;
  idea_status: any;
  updateby: any;
  userdata: any;
  idea:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService
  ) { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);    
    this.idea=history.state;
    console.log(this.idea);
    this.idea_id = this.idea.idea_id;
    this.subject = this.idea.subject;
    this.description = this.idea.description;
    this.cat_id = this.idea.cat_id;
    this.f_area_id = this.idea.f_area_id;
    this.f_area_desc = this.idea.f_area_desc;
    this.last_update= this.idea.last_update;
    this.updateby = this.idea.updateby;
  }
  get f() {
    return this.ideaForm.controls;
  }
  submit(form: NgForm) {
    console.log("Idea is updated", form.value);
    form.value['updateby'] = Number(this.userdata.userid);
    console.log(form.value);
    this.hasError = false;
   
    this.ideasService.getIdeaUpdate(form.value).subscribe(data => {
      console.log(data);
      if (data.status){
        this.router.navigateByUrl('/dashboard')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }
      this.ideaForms = data.data;
     
      console.log(this.ideaForms);
    }); 
}
}