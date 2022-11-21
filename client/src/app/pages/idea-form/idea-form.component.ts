import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  user: any;
  ideaForms: any;
  ideaForm: FormGroup;
  hasError: boolean;
  ErrorMassage: string = ' Kindly fill all the fields';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  department: any;
  subject: String;
  description: String;
  attachment: any;
  cat_id: String;
  f_area_id: String;
  last_update: any;
  idea_status: any;
  updateby: any;
  userdata: any;
  cate: any;
  farea: any;
  image: any;

  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService,
    public admin: AdminService
  ) { }

  ngOnInit(): void {

    this.userdata = localStorage.getItem('user');
    this.userdata = JSON.parse(this.userdata);
    // this.router.getCurrentNavigation().extras.state
    this.admin.getCategoryList(this.userdata).subscribe(data => {
      this.cate = data.data;
    })
    this.admin.getFunctionList(this.userdata).subscribe(data => {
      this.farea = data.data;
    })
  }
  get f() {
    return this.ideaForm.controls;
  }

  selectImage(event:any) {
    this.image = event.target.files[0];
    console.log(this.image);
    
  }

  submit(form: NgForm) {
    form.value['updateby'] = Number(this.userdata.userid);
    this.hasError = false;
    this.ideasService.getSaveIdea(form.value, this.image).subscribe(data => {
      if (data.status) {
        this.router.navigateByUrl('/dashboard')
      } else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }

      this.ideaForms = data.data;
      console.log(this.ideaForms);

    });

  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
