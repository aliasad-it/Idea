import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: any;
  cat_id: any;
  cat_desc: any;
  userdata:any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
   
      this.adminService.getCategoryList(this.userdata).subscribe(data => {
        this.categoryList = data.data;
       
    });
  }

  categoryUpdate(category:any){
    this.router.navigateByUrl('/category-update', { state: category })
  }

}
