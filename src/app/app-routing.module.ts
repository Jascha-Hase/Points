import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Body/login/login.component';
import { ListWithPointsComponent } from './Body/Lists/list-with-points/list-with-points.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vote', component: ListWithPointsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
