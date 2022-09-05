import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  user: any;
  changeForm: FormGroup;
  changeForms: any;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  password:any;
  old_password:any;
  new_password:any;
  confirm_password:any;
  userdata: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    console.log('change password');
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
  }

  get f() {
    return this.changeForm.controls;
  }

  submit(form: NgForm) {
    console.log("change password", form.value);
    form.value['update_by'] = Number(this.userdata.userid);
    console.log(form.value);
    this.hasError = false;
   
    this.authenticationService.ChangePass('password').subscribe(data => {
      console.log(data);
      this.changeForms = data.data;
     
      console.log(this.changeForms);
    }); 
  }

}
