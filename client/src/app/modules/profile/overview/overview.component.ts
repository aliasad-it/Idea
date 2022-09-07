import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  userdata: any;
  idea:any;
  idea_id:any;
  updateby:any;
  hasError:boolean;
  ErrorMassage:any;
  userProfile:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {

    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);  
    this.idea=history.state;
    console.log(this.idea);
    this.idea_id = this.idea.idea_id;
    this.updateby = this.idea.updateby;
  

  this.authenticationService.getProfile(this.userdata.userid).subscribe(data => {
    console.log(this.userdata.userid);
    if (data.status){
      this.userProfile = data.data;

     }else {
      this.hasError = true;
      this.ErrorMassage = 'Failed to update idea.';
    }
    // this.ideaForms = data.data;
   
    // console.log(this.ideaForms);
  }); 
}
}

