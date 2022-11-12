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
  errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata); 
  }

  get f() {
    return this.changeForm.controls;
  }

  submit(form: NgForm) {
    this.hasError = true;
    form.value['update_by'] = Number(this.userdata.userid);
    if (this.old_password === this.userdata.password) {
      if (this.new_password !== null || this.new_password !== "") {
        if (this.new_password.length > 7) {
          if (this.new_password === this.confirm_password) {
            if (this.new_password === this.userdata.password) {
              this.errorMessage = 'Old password cannot be your new password';
            }
            else {
              this.authenticationService.ChangePass(this.userdata.userid, this.confirm_password)
              .subscribe(data => {
                this.changeForms = data.data;
                });
              this.errorMessage = null;
              this.router.navigateByUrl('/profile/overview')
            }
          }else {
            this.errorMessage = "Passwords don't match";
          }
        }else{
          this.errorMessage="Password must be 8 characters long."
        }
      }else {
        this.errorMessage = "New password can't be empty";
      }
    }else {
      this.errorMessage = "Old password is incorrect";
    }
  };


  
}
