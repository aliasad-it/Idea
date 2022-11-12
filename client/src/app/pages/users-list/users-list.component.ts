import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users:any;
  userProfile: any;

  constructor(
    public router: Router,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationService.getAllUsers().subscribe(data => {
      this.users = data.data;
    });
  }

  editrole(userid:any){
    localStorage.setItem("role",JSON.stringify(userid));
    this.router.navigateByUrl('user-role/' + userid);
  }

}
