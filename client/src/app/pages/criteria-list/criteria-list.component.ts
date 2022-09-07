import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-criteria-list',
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.scss']
})
export class CriteriaListComponent implements OnInit {
  criteriaList: any;
  criteria_id: any;
  criteria_name: any;
  userdata:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getCriteriaList(this.userdata).subscribe(data => {
      console.log(data);
      this.criteriaList = data.data;
     
      console.log(this.criteriaList);
  });
  }
  criteriaUpdate(farea:any){
    this.router.navigateByUrl('/criteria-form', { state: farea })
  }
}
