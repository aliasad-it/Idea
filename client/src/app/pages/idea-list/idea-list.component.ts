import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
import { ModalComponent } from '../modalbox/modalbox.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})


export class IdeaListComponent implements OnInit {
  ideasList:any;
   userdata: any;
   idea:any;
   hasError: boolean;
   modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    public ideasService: IdeaService,private modalService: MdbModalService,
    public router: Router,
    private fb: FormBuilder,
    ){}

  ngOnInit(): void {

    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);  
    this.ideasService.IdeaList(this.userdata).subscribe(data => {
      this.ideasList = data.data;
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


