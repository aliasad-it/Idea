import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-criteria-form',
  templateUrl: './criteria-form.component.html',
  styleUrls: ['./criteria-form.component.scss']
})
export class CriteriaFormComponent implements OnInit {
  user: any;
  criteriaForm: FormGroup;
  criteriaForms: any;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  criteria_id: any;
  criteria_name: any;
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
    ('criteria page');
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
  }
  get f() {
    return this.criteriaForm.controls;
  }
  submit(form: NgForm) {
    form.value['update_by'] = Number(this.userdata.userid);
    this.hasError = false;
   
    this.adminService.getAddCriteria(form.value).subscribe(data => {
      this.criteriaForms = data.data;
     
    }); 
    this.router.navigateByUrl("/criteria-list");
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
