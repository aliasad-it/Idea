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
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
    // this.category= history.state;
  }

  get f() {
    return this.cateForm.controls;
  }

submit(form: NgForm) {
    form.value['update_by'] = Number(this.userdata.userid);
    this.hasError = false;
   
    this.adminService.getAddCat(form.value).subscribe(data => {
      this.cateForms = data.data;
     
    }); 
    this.router.navigateByUrl("/category-list")
      
   
    
    
    
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
