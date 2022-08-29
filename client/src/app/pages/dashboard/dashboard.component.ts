import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // departments=[
  //   { svgIcon:"./assets/media/icons/duotune/general/gen032.svg",
  //   class:"card bg-danger hoverable card-xl-stretch mb-xl-8",
  //   color:"Danger",
  //   iconColor:"primary",
  //   title:"IT",
  //   description:"Information Technology"},
  //   { svgIcon:"./assets/media/icons/duotune/ecommerce/ecm008.svg",
  //   class:"card bg-dark hoverable card-xl-stretch mb-xl-8",
  //   color:"dark",
  //   iconColor:"white",
  //   title:"Sales",
  //   description:"Sales & Distribution"},
  //   {
  //     svgIcon:"./assets/media/icons/duotune/finance/fin006.svg",
  //     class:"card bg-warning hoverable card-xl-stretch mb-xl-8",
  //     color:"warning",
  //     iconColor:"white",
  //     title:"Production",
  //     description:"Manufacturing",
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/graphs/gra007.svg",
  //     class:"card bg-info hoverable card-xl-stretch mb-5 mb-xl-8",
  //     color:"info",
  //     iconColor:"white",
  //     title:"Shipping",
  //     description:"Logistics"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/general/gen032.svg",
  //     class:"card bg-success hoverable card-xl-stretch mb-xl-8",
  //     color:"success",
  //     iconColor:"primary",
  //     title:"MRD",
  //     description:"Market & Research"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/ecommerce/ecm008.svg",
  //     class:"card bg-primary hoverable card-xl-stretch mb-xl-8",
  //     color:"white",
  //     iconColor:"white",
  //     title:"MEM",
  //     description:"Equipment Managment"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/finance/fin006.svg",
  //     class:"card bg-secondary hoverable card-xl-stretch mb-xl-8",
  //     color:"secondary",
  //     iconColor:"white",
  //     title:"Store",
  //     description:"Milestone Reached"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/graphs/gra007.svg",
  //     class:"card bg-gradient-warning hoverable card-xl-stretch mb-5 mb-xl-8",
  //     color:"gradient-warning",
  //     iconColor:"white",
  //     title:"Admin",
  //     description:"Milestone Reached",
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/general/gen032.svg",
  //     class:"card bg-white hoverable card-xl-stretch mb-xl-8",
  //     color:"white",
  //     iconColor:"primary",
  //     title:"WorkShop",
  //     description:"SAP UI Progress"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/ecommerce/ecm008.svg",
  //     class:"card bg-dark hoverable card-xl-stretch mb-xl-8",
  //     color:"dark",
  //     iconColor:"white",
  //     title:"Publicity",
  //     description:"New Customers"
  //   },
  //   { 
  //     svgIcon:"./assets/media/icons/duotune/finance/fin006.svg",
  //     class:"card bg-warning hoverable card-xl-stretch mb-xl-8",
  //     color:"warning",
  //     iconColor:"white",
  //     title:"Cash",
  //     description:"Milestone Reached"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/graphs/gra007.svg",
  //     class:"card bg-info hoverable card-xl-stretch mb-5 mb-xl-8",
  //     color:"info",
  //     iconColor:"white",
  //     title:"Accounts",
  //     description:"Finance"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/general/gen032.svg",
  //     class:"card bg-white hoverable card-xl-stretch mb-xl-8",
  //     color:"white",
  //     iconColor:"primary",
  //     title:"HR",
  //     description:"Human Resource"
  //   },
  //   {
  //     svgIcon:"./assets/media/icons/duotune/ecommerce/ecm008.svg",
  //     class:"card bg-dark hoverable card-xl-stretch mb-xl-8",
  //     color:"dark",
  //     iconColor:"white",
  //     title:"TimeOffice",
  //     description:"Time Office"
  //   }

  // ]
 
    ideasList:any;
    PresentTo:any;
    userdata: any;
    constructor(public ideasService: IdeaService , public router:Router) {
      
    }
  
    ngOnInit(): void {
  //    this.ideasList=[
  //     {
  //         "subject": "Idea portal",
  //         "description": "Should have a idea portal in which user can share there thoughts aand new ideas related to the problems they are facing",
  //         "presentedBy": "Ali Asad",
  //         "date": "8 July 2022",
  //         "status": "Under Review",
  //         "department": "IT"
  //     },
  //     {
  //         "subject": "Idea portal",
  //         "desrciption": "Should have a idea portal in which user can share there thoughts aand new ideas related to the problems they are facing",
  //         "presentedBy": "Ali Asad",
  //         "date": "8 July 2022",
  //         "status": "Under Review",
  //         "department": "IT"
  //     }
  // ]
    //   this.ideasService.getIdeaList(this.user).subscribe(data => {
    //     console.log(data);
    //     this.ideasList = data.data;
    //     console.log(this.ideasList);
    //   });
     
    // }
    // departments=[
    //   { svgIcon:"./assets/media/icons/duotune/general/gen032.svg",
    //   class:"card bg-danger hoverable card-xl-stretch mb-xl-8",
    //   color:"Danger",
    //   iconColor:"primary",
    //   title:"IT",
    //   description:"Information Technology"}]

    //   ideaForm(){
   
    //     console.log('dep');
    //     // this.router.navigateByUrl('/idea-form');
    //     // this.router.navigateByUrl('/idea/form', { state: dep })
    
    //   }
      this.userdata=localStorage.getItem('user');
      this.userdata=JSON.parse(this.userdata);  
    
      this.ideasService.getIdeaList(this.userdata).subscribe(data => {
        console.log(data);
        this.ideasList = data.data;
        console.log(this.ideasList);
      });

      this.userdata=localStorage.getItem('user');
      this.userdata=JSON.parse(this.userdata);  
    
      this.ideasService.PresentTo(this.userdata).subscribe(data => {
        console.log(data);
        this.PresentTo = data.data;
        console.log(this.PresentTo);
      });
    }
}
  // constructor(public router:Router) {}

  // ngOnInit(): void {}

  


