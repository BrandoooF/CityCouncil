import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestListComponent } from './dashboard/request-list/request-list.component';
import { RequestDetailComponent } from './dashboard/request-detail/request-detail.component';
import { CategoryTasksComponent } from './dashboard/category-tasks/category-tasks.component';
import { TasksByStatusComponent } from './dashboard/tasks-by-status/tasks-by-status.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { TasksByNeighborhoodComponent } from './dashboard/tasks-by-neighborhood/tasks-by-neighborhood.component';
import { AllTasksComponent } from './dashboard/all-tasks/all-tasks.component';
import { DelinquentTasksComponent } from './dashboard/delinquent-tasks/delinquent-tasks.component';
import { OverviewComponent } from './dashboard/overview/overview.component';

const routes: Routes = [
  {path: '', component: RequestCreateComponent},
  {path: 'list', component: RequestListComponent},
  {path: 'request-detail/:id', component: RequestDetailComponent},
  {path: 'category-tasks/:id', component: CategoryTasksComponent},
  {path: 'status-tasks/:id', component: TasksByStatusComponent},
  {path: 'dashboard', component: SideNavComponent, 
    children:[
      {path: 'list', component: RequestListComponent},
      {path: 'request-detail/:id', component: RequestDetailComponent},
      {path: 'category-tasks/:id', component: CategoryTasksComponent},
      {path: 'status-tasks/:id', component: TasksByStatusComponent},
      {path: 'neighborhood-tasks/:id', component: TasksByNeighborhoodComponent},
      {path: 'delinquent-tasks', component: DelinquentTasksComponent},
      {path: 'all-tasks', component: AllTasksComponent},
      {path: 'overview', component: OverviewComponent},
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
