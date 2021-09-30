import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {TaskDetailComponent} from './task-detail/task-detail.component'
import {TaskAddComponent} from './task-add/task-add.component'

const routes: Routes = [
    {path: 'tasks', component: TasksComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    { path: 'detail/:id', component: TaskDetailComponent },
    {path: 'task-add', component: TaskAddComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
