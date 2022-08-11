import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService
    ) { }

  ngOnInit(): void {
    this.department= history.state;
    console.log(history.state);
    // this.router.getCurrentNavigation().extras.state
  }
  get f() {
    return this.ideaForm.controls;
  }

  submit() {
    console.log("Idea is new");
    this.hasError = false;
   
    this.ideasService.getNewIdea(this.user).subscribe(data => {
      console.log(data);
      this.ideaForms = data.data;
      console.log(this.ideaForms);
    }); 
      
   
    
    
    
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
