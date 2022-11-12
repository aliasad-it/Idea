import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  
  user: any;
  changeForm: FormGroup;
  changeForms: any;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  name: any;
  email: any;
  phone: any;
  password: any;
  userdata: any;
  userid: number;
  roleid:number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userdata = localStorage.getItem('user');
    this.userdata = JSON.parse(this.userdata);
    this.name = this.userdata.fullname;
    this.email = this.userdata.email;
    this.phone = this.userdata.phone;
    this.userid = this.userdata.userid
    this.roleid= this.userdata.roleid
    
  }

  get f() {
    return this.changeForm.controls;
  }

  submit(form: NgForm) {
    form.value['update_by'] = Number(this.userdata.userid);
    this.hasError = false;
    this.authenticationService.updateUser(this.name,this.email,this.phone,this.userid,this.roleid).subscribe(data => {
      this.changeForms = data.data;
    });
    this.router.navigateByUrl('/profile/overview')
  }

}
