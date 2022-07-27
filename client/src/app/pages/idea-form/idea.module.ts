import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IdeaComponent } from './idea.component';
import { IdeaFormComponent } from './idea-form.component';
import { IdeaRoutingModule } from './idea-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IdeaListComponent } from '../idea-list/idea-list.component';
@NgModule({
    declarations: [IdeaComponent,IdeaFormComponent,IdeaListComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgbTooltipModule,
      IdeaRoutingModule
    ]
  })
  export class IdeaModule {}
  