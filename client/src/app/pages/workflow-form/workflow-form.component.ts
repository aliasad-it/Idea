import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
import { AdminService } from 'src/app/services/admin.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.scss']
})
export class WorkFlowFormComponent implements OnInit {
  user: any;
  ideaForms: any;
  ideaForm: FormGroup;
  hasError: boolean;
  ErrorMassage:string=' Kindly fill all the fields';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  department:any;

  cat_id: Number=0;
  f_area_id: String;
  level1_user:any;
  level2_user:any;
  level3_user:any;
 userdata:any;
  users:any=[];
  mode: any;
  wflowid:any;

  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService,
    public adminService: AdminService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.paramMap.get('mode');
    if(this.mode == 'edit'){
        this.wflowid= this.route.snapshot.paramMap.get('wflowid');
        this.adminService.getWrkflow(this.wflowid).subscribe(wflow => {
            console.log(wflow);
            this.cat_id=wflow.data.cat_id;
            this.f_area_id=wflow.data.f_area_id;
            this.level1_user=wflow.data.level1_user;
            this.level2_user=wflow.data.level2_user;
            this.level3_user=wflow.data.level3_user;
            //this.users=users.data
        })
    }
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);        
    // this.router.getCurrentNavigation().extras.state
    this.ideasService.getAllUsers().subscribe(users => {
        console.log(users)
        this.users=users.data
    })
  }
  get f() {
    return this.ideaForm.controls;
  }

  submit(form: NgForm) {
    console.log("workflow is new", form.value);
    
    console.log(form.value);
    this.hasError = false;
   
    this.adminService.SaveWorkflow(form.value).subscribe(data => {
      console.log(data);
      if (data.status){
        this.router.navigateByUrl('/work-flow')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }
      this.ideaForms = data.data;
     
      console.log(this.ideaForms);
    }); 
    
  }

  updateWorkflow(form: NgForm) {
    console.log("workflow is new", form.value);
    
    console.log(form.value);
    this.hasError = false;
   
    this.adminService.updateWorkflow(form.value).subscribe(data => {
      console.log(data);
      if (data.status){
        this.router.navigateByUrl('/work-flow')
       }else {
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
