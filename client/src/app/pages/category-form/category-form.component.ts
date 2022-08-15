import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  user: any;
  cateForm: FormGroup;
  cateForms: any;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  cat_id: any;
  cat_desc: any;
  last_update: any;
  update_by: any;
  userdata: any;

  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService
  ) { }
 

  ngOnInit(): void {
    console.log('category page');
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
    // this.category= history.state;
    // console.log(history.state);
  }

  get f() {
    return this.cateForm.controls;
  }

submit(form: NgForm) {
    console.log("cate is new", form.value);
    form.value['update_by'] = Number(this.userdata.userid);
    console.log(form.value);
    this.hasError = false;
   
    this.adminService.getAddCat(form.value).subscribe(data => {
      console.log(data);
      this.cateForms = data.data;
     
      console.log(this.cateForms);
    }); 
      
   
    
    
    
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
