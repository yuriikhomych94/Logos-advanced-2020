import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UsersComponent } from './pages/users/users.component';
import { TaskComponent } from './pages/task/task.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'cenzor', component: CenzorComponent },
  { path: 'users', component: UsersComponent },
  { path: 'task', component: TaskComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
