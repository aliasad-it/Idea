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
  func_area: String;

  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService
    ) { }

  ngOnInit(): void {
    
    console.log(history.state);
    // this.router.getCurrentNavigation().extras.state
  }
  get f() {
    return this.ideaForm.controls;
  }

  submit(form: NgForm) {
    console.log("Idea is new", form.value);
    this.hasError = false;
   
    this.ideasService.getNewIdea(form.value).subscribe(data => {
      console.log(data);
      this.ideaForms = data.data;
      console.log(this.ideaForms);
    }); 
      
   
    
    
    
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
