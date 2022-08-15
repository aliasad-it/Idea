import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-function-area',
  templateUrl: './function-area.component.html',
  styleUrls: ['./function-area.component.scss']
})
export class FunctionAreaComponent implements OnInit {
  user: any;
  fareaForm: FormGroup;
  fareaForms: any;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  f_area_id: any;
  f_area_desc: any;
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
    console.log('farea page');
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
  }
  get f() {
    return this.fareaForm.controls;
  }
  submit(form: NgForm) {
    console.log("farea is new", form.value);
    form.value['update_by'] = Number(this.userdata.userid);
    console.log(form.value);
    this.hasError = false;
   
    this.adminService.getAddFarea(form.value).subscribe(data => {
      console.log(data);
      this.fareaForms = data.data;
     
      console.log(this.fareaForms);
    }); 

}
ngOnDestroy() {
  this.unsubscribe.forEach((sb) => sb.unsubscribe());
}

}