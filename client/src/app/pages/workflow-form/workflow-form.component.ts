import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  users:any=[{userid:1}];
  mode: any;
  wflowid:any;
  cate:any;
  farea:any;

  private unsubscribe: Subscription[] = [];
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public ideasService: IdeaService,
    public adminService: AdminService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.paramMap.get('mode');
    this.ideasService.getAllUsers().subscribe(users => {
      this.users=users.data
      this.cd.detectChanges();
  })
    if(this.mode == 'edit'){
        this.wflowid= this.route.snapshot.paramMap.get('wflowid');
        this.adminService.getWrkflow(this.wflowid).subscribe(wflow => {
            this.cat_id=wflow.data.cat_id;
            this.f_area_id=wflow.data.f_area_id;
            this.level1_user=wflow.data.level1_user;
            this.level2_user=wflow.data.level2_user;
            this.level3_user=wflow.data.level3_user;
            this.cd.detectChanges();
            //this.users=users.data
        })
    }
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);        
    // this.router.getCurrentNavigation().extras.state
    
    this.adminService.getCategoryList(this.userdata).subscribe(data=>{
      this.cate = data.data;
      this.cd.detectChanges();
    })
    this.adminService.getFunctionList(this.userdata).subscribe(data=>{
      this.farea = data.data;
      this.cd.detectChanges();
    })
  }
  get f() {
    return this.ideaForm.controls;
  }

  submit(form: NgForm) {
    
    this.hasError = false;
   
    this.adminService.SaveWorkflow(form.value).subscribe(data => {
      if (data.status){
        this.router.navigateByUrl('/work-flow')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }
      this.ideaForms = data.data;
     
    }); 
    
  }

  updateWorkflow(form: NgForm) {
    
    this.hasError = false;
    this.adminService.updateWorkflow(form.value,this.wflowid).subscribe(data => {
      if (data.status){
        this.router.navigateByUrl('/work-flow')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }
      this.ideaForms = data.data;
     
    }); 
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
