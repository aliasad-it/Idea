import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { CategoryFormComponent } from './pages/category-form/category-form.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { FunctionAreaComponent } from './pages/function-area/function-area.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { FunctionListComponent } from './pages/function-list/function-list.component';
import { CategoryUpdateComponent } from './pages/category-update/category-update.component';
import { FunctionUpdateComponent } from './pages/function-update/function-update.component';
import { IdeaUpdateComponent } from './pages/idea-update/idea-update.component';
import { WorkFlowComponent } from './pages/work-flow/workflow.component';
import { WorkFlowFormComponent } from './pages/workflow-form/workflow-form.component';
import { ReviewFormComponent } from './pages/review-form/review-form.component';
import { CriteriaListComponent } from './pages/criteria-list/criteria-list.component';
import { CriteriaFormComponent } from './pages/criteria-form/criteria-form.component';
// import { IdeaFormModule } from './pages/idea-form/idea-form.module';
// import { IdeaListModule } from './pages/idea-list/idea-list.module';
// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent, 
    CategoryFormComponent, 
    FunctionAreaComponent, 
    CategoryListComponent, 
    FunctionListComponent, 
    CategoryUpdateComponent, 
    FunctionUpdateComponent, 
    IdeaUpdateComponent,
    WorkFlowComponent,
    WorkFlowFormComponent,
    ReviewFormComponent,
    CriteriaListComponent,
    CriteriaFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    // IdeaFormModule,
    // IdeaListModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  entryComponents:[
    CategoryFormComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
