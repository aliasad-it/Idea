import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  user: any;
  ideaForms: any;
  ideaForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  department:any;
  subject:String;
  description: String;
  attachment: any;
  cat_id: String;
  f_area_id: String;
  last_update: any;
  idea_status: any;
  updateby: any;
  userdata: any;

  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService
    ) { }

  ngOnInit(): void {
    
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);        
    // this.router.getCurrentNavigation().extras.state
  }
  get f() {
    return this.ideaForm.controls;
  }

  submit(form: NgForm) {
    console.log("Idea is new", form.value);
    form.value['updateby'] = Number(this.userdata.userid);
    console.log(form.value);
    this.hasError = false;
   
    this.ideasService.getSaveIdea(form.value).subscribe(data => {
      console.log(data);
      this.ideaForms = data.data;
     
      console.log(this.ideaForms);
    }); 
      
   
    
    
    
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
