import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkFlowComponent implements OnInit {
  workflowList: any;
  f_area_id: any;
  f_area_desc: any;
  userdata:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    
    this.adminService.getWorkFlows(this.userdata).subscribe(data => {
      this.workflowList = data.data;
      this.cd.detectChanges();
  });
  }
  wflowUpdate(wflow:any){
    this.router.navigateByUrl('/work-flow-form/edit/'+wflow.wf_id )
  }
}
