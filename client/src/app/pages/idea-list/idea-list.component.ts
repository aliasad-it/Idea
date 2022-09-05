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
   userdata: any;
   idea:any;
   hasError: boolean;
  constructor(
    public ideasService: IdeaService,
    public router: Router,
    private fb: FormBuilder,
    ){}

  ngOnInit(): void {

    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);  
  //  this.ideasList=[
    // {
    //     "subject": "@sujbect",
    //     "description": "Should have a idea portal in which user can share there thoughts aand new ideas related to the problems they are facing",
    //     "presentedBy": "Ali Asad",
    //     "date": "8 July 2022",
    //     "status": "Under Review",
    //     "department": "IT"
    // }
//     {
//         "subject": "Idea portal",
//         "desrciption": "Should have a idea portal in which user can share there thoughts aand new ideas related to the problems they are facing",
//         "presentedBy": "Ali Asad",
//         "date": "8 July 2022",
//         "status": "Under Review",
//         "department": "IT"
//     }
//  ]
    this.ideasService.getIdeaList(this.userdata).subscribe(data => {
      console.log(data);
      this.ideasList = data.data;
      console.log(this.ideasList);
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
}


