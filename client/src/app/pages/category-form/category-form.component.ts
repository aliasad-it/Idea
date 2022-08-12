import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
;
 
  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
  ) { }
 

  ngOnInit(): void {
    console.log('category page');
    // this.category= history.state;
    // console.log(history.state);
  }

  // submit() {
  //   this.hasError = false;
  
  // }

  // ngOnDestroy() {
  //   this.unsubscribe.forEach((sb) => sb.unsubscribe());
  // }

}
