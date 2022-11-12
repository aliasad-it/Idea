import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
  roleList: any;
  roleid: any;
  rolename: any;
  userdata:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationService.getRoles().subscribe(data => {
      this.roleList = data.data;
  });
  }
  roleUpdate(farea:any){
    this.router.navigateByUrl('/role-update', { state: farea })
  }

}
