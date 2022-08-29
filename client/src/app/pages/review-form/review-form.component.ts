import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable, ConnectableObservable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { IdeaService } from 'src/app/services/idea.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  user: any;
  reviewForms: any;
  reviewForm: FormGroup;
  hasError: boolean;
  reviewList:any;
  userdata: any;
  ErrorMassage:string=' Kindly fill all the fields';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  idea_id:any;
  subject:String;
  description: String;
  attachment: any;
  last_update: any;
  idea_status: any;
  updateby: any;
  reviewlist:any;
  reviewer_id:any;
  review_status:any;
  criterialist:any;
  score:any;
  comment:any;
  mode: any;
  users: any;
  reviews:any=[];
  idealist:any;
  f_area_desc:any;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public adminService: AdminService,
    public ideasService: IdeaService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.paramMap.get('mode');
    // if(this.mode == 'edit'){
        this.idea_id= this.route.snapshot.paramMap.get('idea_id');
        this.ideasService.SelectIdea(this.idea_id).subscribe(idea => {
            console.log(idea);
            this.subject=idea.data[0].subject;
            this.description=idea.data[0].description;
            this.attachment=idea.data[0].attachment;
            this.f_area_desc=idea.data[0].f_area_desc;
            this.idea_status=idea.data[0].idea_status;
            this.cd.detectChanges();
            //this.users=users.data
        })
    

    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);  

    this.adminService.getCriteria().subscribe((data: any) => {
      console.log(data)
      this.criterialist=data.data
      this.adminService.getReviewList(this.idea_id,this.userdata.userid).subscribe((data: any) => {
        console.log(data)
        this.reviewlist=data.data
        
        if(this.criterialist.length > 0 ){
          if(this.reviewlist.length > 0){
            this.criterialist.forEach((criteria:any) => {
              let rIndex = this.reviewlist.findIndex((x:any) => x.criteria_id == criteria.criteria_id)
              let review = {
              criteria_id:criteria.criteria_id,
              criteria_name:criteria.criteria_name,
              score: this.reviewlist[rIndex].score,
              comment: this.reviewlist[rIndex].comment,
              updateby: this.reviewlist[rIndex].updateby,
              idea_id: this.reviewlist[rIndex].idea_id
              
              }	
                this.reviews.push(review)
               
            })
            this.cd.detectChanges();
            console.log(this.reviews);
          } else {
            this.criterialist.forEach((criteria:any) => {
              
              let review = {
                criteria_id:criteria.criteria_id,
                criteria_name:criteria.criteria_name,
                score: '',
                comment: '',
                updateby: this.userdata.userid,
                idea_id: this.idea_id
              }	
                this.reviews.push(review)
                this.cd.detectChanges()
                console.log(this.reviews)
            })
          }
        }
      
    })
    
  })


  }
  get f() {
    return this.reviewForm.controls;
  }

  submit(form: NgForm) {
    console.log("review is new", form.value);
    
    console.log(form.value);
    this.hasError = false;
   
    this.adminService.SaveReview(this.reviews).subscribe(data => {
      console.log(data);
      if (data.status){
        this.router.navigateByUrl('/review-form')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }
      this.reviews = data.data;
     
      console.log(this.reviews);
    }); 
    
  }

  updateReview(form: NgForm) {
    console.log("review is new", form.value);
    
    console.log(form.value);
    this.hasError = false;
   
    this.adminService.updateReview(form.value).subscribe(data => {
      console.log(data);
      if (data.status){
        this.router.navigateByUrl('/work-flow')
       }else {
        this.hasError = true;
        this.ErrorMassage = 'Failed to submit.';
      }
      this.reviewForms = data.data;
     
      console.log(this.reviewForms);
    }); 
  }

  // ngOnDestroy() {
  //   this.unsubscribe.forEach((sb) => sb.unsubscribe());
  // }
}
