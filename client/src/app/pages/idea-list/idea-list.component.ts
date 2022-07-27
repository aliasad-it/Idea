import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})


export class IdeaListComponent implements OnInit {
  ideasList:any;
  user:{}={name:'ali'}
  constructor(public ideasService: IdeaService){
    
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
    this.ideasService.getIdeaList(this.user).subscribe(data => {
      console.log(data);
      this.ideasList = data.data;
      console.log(this.ideasList);
    });
  }
}


