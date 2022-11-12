import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-users-role',
  templateUrl: './users-role.component.html',
  styleUrls: ['./users-role.component.scss']
})
export class UsersRoleComponent implements OnInit {

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
  userid: any;
  roleid:number;
  roles$:any

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('userid');
    this.userid=localStorage.getItem('role');
    this.userid=JSON.parse(this.userid);
    this.authenticationService.getRoles().subscribe(data=>{
      this.roles$ = data.data;
    })
    this.authenticationService.getUser(this.userid).subscribe(data => {
      this.user = data.data;
      this.name = this.user.fullname;
      this.email = this.user.email;
      this.phone = this.user.phone;
      this.roleid = this.user.roleid;
    });
   
  }

  get f() {
    return this.changeForm.controls;
  }

  submit(form: NgForm) {
    form.value['update_by'] = Number(this.userid);
    this.hasError = false;
    this.roleid = form.value.roleid;
    this.authenticationService.updateUser(this.name,this.email,this.phone,this.userid,this.roleid).subscribe(data => {
      this.changeForms = data.data;
    });
    this.router.navigateByUrl("/users")
  }

}
