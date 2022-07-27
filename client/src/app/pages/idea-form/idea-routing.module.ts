import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaComponent } from '../idea-form/idea.component';
import { IdeaListComponent } from '../idea-list/idea-list.component';
import { IdeaFormComponent } from './idea-form.component';

const routes: Routes = [
    {
      path: '',
      component: IdeaComponent,
      children: [
        {
          path: 'lists',
          component: IdeaListComponent,
        },
        {
          path: 'form',
          component: IdeaFormComponent,
        },
       
        { path: '', redirectTo: 'lists', pathMatch: 'full' },
        { path: '**', redirectTo: 'lists', pathMatch: 'full' },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class IdeaRoutingModule {}
  
  
  