import { Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FunctionAreaComponent } from './function-area/function-area.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FunctionListComponent } from './function-list/function-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { FunctionUpdateComponent } from './function-update/function-update.component';
import { WorkFlowComponent } from './work-flow/workflow.component';
import { WorkFlowFormComponent } from './workflow-form/workflow-form.component';
import { IdeaUpdateComponent } from './idea-update/idea-update.component';
import { ReviewFormComponent } from './review-form/review-form.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
   { path: 'function-area', component: FunctionAreaComponent},
  { path: 'function-list', component: FunctionListComponent},
  { path: 'function-update', component: FunctionUpdateComponent},
  { path: 'category-form', component: CategoryFormComponent},
  { path: 'category-list', component: CategoryListComponent},
  { path: 'category-update', component: CategoryUpdateComponent},
  { path: 'idea-update', component: IdeaUpdateComponent},
  { path: 'work-flow', component: WorkFlowComponent},
  { path: 'work-flow-form/:mode', component: WorkFlowFormComponent},
  { path: 'work-flow-form/:mode/:wflowid', component: WorkFlowFormComponent},
  { path: 'review-form/:idea_id', component: ReviewFormComponent},
  { path: 'work-flow-form/:mode', component: WorkFlowFormComponent},
  { path: 'work-flow-form/:mode/:wflowid', component: WorkFlowFormComponent},
  // {
  //   path:'category',
  //   loadChildren:() =>
  //     import('./category-form/category.module').then((m)=> m.CategoryModule),
  // },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'idea',
    loadChildren: () =>
      import('./idea-form/idea.module').then((m) => m.IdeaModule),
  },
  
 
  // {
  //   path: 'idea-lists',
  //   loadChildren: () =>
  //     import('./idea-list/idea-list.module').then((m) => m.IdeaListModule),
  // },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
