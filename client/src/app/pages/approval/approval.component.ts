import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IdeaService } from 'src/app/services/idea.service';
import { ModalComponent } from '../modalbox/modalbox.component';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  ideasList:any;
    PresentTo:any;
    userdata: any;
    modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(public ideasService: IdeaService ,
    private cd: ChangeDetectorRef, private modalService: MdbModalService,
    public router:Router) { }

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

    openModal(idea:any) {
      this.modalRef = this.modalService.open(ModalComponent, {
        data: {idea:idea},
        modalClass: 'modal-lg'
      })
    }

}
