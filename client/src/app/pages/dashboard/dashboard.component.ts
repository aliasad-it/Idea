import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modalbox/modalbox.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

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
    modalRef: MdbModalRef<ModalComponent> | null = null;
    hasError:boolean;

  constructor(public ideasService: IdeaService ,
    private cd: ChangeDetectorRef, private modalService: MdbModalService,
    public router:Router) {
      
    }
  
    ngOnInit(): void {
 
      this.userdata=localStorage.getItem('user');
      this.userdata=JSON.parse(this.userdata);  
      this.ideasService.getIdeaList(this.userdata).subscribe(data => {
        this.ideasList = data.data;
        this.cd.detectChanges();
      });

      this.userdata=localStorage.getItem('user');
      

      this.userdata=JSON.parse(this.userdata);  
      this.ideasService.PresentTo(this.userdata).subscribe(data => {
        this.PresentTo = data.data;
        this.cd.detectChanges();
      });
      
    }


    ideaUpdate(idea:any){
      if( idea.idea_status=='New'){
       this.router.navigateByUrl('/idea-update', { state: idea })
      }
      else{
       this.hasError= true;
      }
     }
    openModal(idea:any) {
      this.modalRef = this.modalService.open(ModalComponent, {
        data: {idea:idea},
        modalClass: 'modal-lg'
      })
    }

}


  


