import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-function-update',
  templateUrl: './function-update.component.html',
  styleUrls: ['./function-update.component.scss']
})
export class FunctionUpdateComponent implements OnInit {
  user:any;
  fareaForm: FormGroup;
  fareaForms: any;
  hasError: boolean;
  Error: boolean = false;
  ErrorMassage:string=' Kindly fill all the fields';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  f_area_id: any;
  f_area_desc: any;
  last_update: any;
  update_by: any;
  userdata: any;
  farea:any;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
    // this.category=this.router.getCurrentNavigation().extras.state
    this.farea=history.state;
    this.f_area_id = this.farea.f_area_id;
    this.f_area_desc = this.farea.f_area_desc;
  }
  get f() {
    return this.fareaForm.controls;
  }

  submit(form: NgForm) {
    if(form.invalid){
      this.ErrorMassage = 'Kindly fill all the fields'
      this.hasError = true;
      return
  
    }
      form.value['update_by'] = Number(this.userdata.userid);
      form.value['last_update'] = new Date(Date.now() );
  
      let data={
        f_area_id:this.farea.f_area_id,
        f_area_desc:this.f_area_desc,
        update_by:Number(this.userdata.userid),
        last_update:new Date(Date.now() )
      
      }
      this.hasError = false;
     
      this.adminService.getFareaUpdate(data).subscribe(data => {
       if (data.status){
        this.router.navigateByUrl('/function-list')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to update function area.';
      }
      }); 
  
    }
}
