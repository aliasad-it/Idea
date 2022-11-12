import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles-update.component.scss']
})
export class RolesUpdateComponent implements OnInit {

  hasError: boolean;
  roledata: any;
  userdata:any;
  ErrorMassage: any;
  role:any;
  roleid:any;
  rolename:any;
  roleForm: FormGroup;


  constructor(
    public router: Router,
    private fb: FormBuilder,
    public authenticationService: AuthenticationService

  ) { }

  ngOnInit(): void {
    this.userdata = localStorage.getItem('user');
    this.userdata = JSON.parse(this.userdata);
    // this.role=this.router.getCurrentNavigation().extras.state
  }
  get f() {
    return this.roleForm.controls;
  }

  submit(form: NgForm) {
    if (form.invalid) {
      this.ErrorMassage = 'Kindly fill all the fields'
      this.hasError = true;
      return
    }
    form.value['update_by'] = Number(this.userdata.userid);
    form.value['last_update'] = new Date(Date.now());

    this.hasError = false;

    this.authenticationService.addRole(form.value).subscribe(data => {
      if (data.status) {
        this.router.navigateByUrl('/role-list')
      } else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to add role.';
      }
    });

  }

}
