import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.scss']
})
export class FunctionListComponent implements OnInit {
  functionList: any;
  f_area_id: any;
  f_area_desc: any;
  userdata:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService,
    private cd:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    
    this.adminService.getFunctionList(this.userdata).subscribe(data => {
      this.functionList = data.data;
      this.cd.detectChanges();
  });
  }
  fareaUpdate(farea:any){
    this.router.navigateByUrl('/function-update', { state: farea })
  }
}
