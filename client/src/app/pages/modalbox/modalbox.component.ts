import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.scss']

})
export class ModalComponent implements OnInit {
  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

  idea: any;
  data: any;
  idea_status:any;
  ngOnInit(): void {
    this.idea= this.idea;
    // this.idea_status = this.idea.idea_status;
  }
}