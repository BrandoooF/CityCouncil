import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestListComponent } from './dashboard/request-list/request-list.component';
import { HomeComponent } from './dashboard/home/home.component';
import { RequestService } from './request.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RequestDetailComponent } from './dashboard/request-detail/request-detail.component';
import { RequestActionsComponent } from './dashboard/request-actions/request-actions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CategoryTasksComponent } from './dashboard/category-tasks/category-tasks.component';
import { TasksByStatusComponent } from './dashboard/tasks-by-status/tasks-by-status.component';
import { DelinquentTasksComponent } from './dashboard/delinquent-tasks/delinquent-tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListRowComponent } from './task-list-row/task-list-row.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { TasksByNeighborhoodComponent } from './dashboard/tasks-by-neighborhood/tasks-by-neighborhood.component';
import { AllTasksComponent } from './dashboard/all-tasks/all-tasks.component';
import { OverviewComponent } from './dashboard/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestCreateComponent,
    RequestListComponent,
    HomeComponent,
    RequestDetailComponent,
    RequestActionsComponent,
    CategoryTasksComponent,
    TasksByStatusComponent,
    DelinquentTasksComponent,
    TaskItemComponent,
    TaskListRowComponent,
    SideNavComponent,
    RequestTableComponent,
    TasksByNeighborhoodComponent,
    AllTasksComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [
    RequestService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
