import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  hasError: boolean = false;
  emailVerified: boolean = false;
  confirmEmailForm: FormGroup;
  confirmEmail: any;
  userdata: any;
  email:any;
  userid:any;
  error1:any;
  
  

  constructor(private authService: AuthenticationService,
    private cd: ChangeDetectorRef,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('userid');
   
    //this.email = this.userdata.email;
   // this.userid = this.userdata.userid;
  }

  get f() {
    return this.confirmEmailForm.controls;
  }

  submit(form: NgForm) {
    this.authService.verifyEmail(this.confirmEmail, this.userid)
    .subscribe((data:any) => {
      
      if (data.status == true) {
        this. emailVerified =true;
       
        this.cd.detectChanges();
        this.router.navigate(["/"]);
      } else {
        this.hasError = true;
        this.cd.detectChanges();
      }
    });
    // this.router.navigateByUrl("/");
  }

}
