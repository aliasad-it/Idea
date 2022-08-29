import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  user: any;
  cateForm: FormGroup;
  cateForms: any;
  hasError: boolean;
  Error: boolean = false;
  ErrorMassage:string=' Kindly fill all the fields';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  cat_id: any;
  cat_desc: any;
  last_update: any;
  update_by: any;
  userdata: any;
  category:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService
    
  ) {}

  ngOnInit(): void {
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
    // this.category=this.router.getCurrentNavigation().extras.state
    this.category=history.state;
    console.log(this.category);
    this.cat_id = this.category.cat_id;
    this.cat_desc = this.category.cat_desc;
  }
  get f() {
    return this.cateForm.controls;
  }

submit(form: NgForm) {
  if(form.invalid){
    this.ErrorMassage = 'Kindly fill all the fields'
    this.hasError = true;
    return

  }
    console.log("cate is new", form.value);
    form.value['update_by'] = Number(this.userdata.userid);
    form.value['last_update'] = new Date(Date.now() );

    console.log(form.value);
    let data={
      cat_id:this.category.cat_id,
      cat_desc:this.cat_desc,
      update_by:Number(this.userdata.userid),
      last_update:new Date(Date.now() )
    
    }
    console.log(data)
    this.hasError = false;
   
    this.adminService.getCategoryUpdate(data).subscribe(data => {
      console.log(data);
     if (data.status){
      this.router.navigateByUrl('/category-list')
     }else {
      this.hasError = true;
      this.ErrorMassage = 'Failed to update category.';
    }
    }); 

  }
    
}
