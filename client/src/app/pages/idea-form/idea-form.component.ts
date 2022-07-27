import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  ideaForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  department:any;
  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder
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
    this.hasError = false;
  
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
