import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListWithPointsComponent } from './list-with-points/list-with-points.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: []},
  { path: 'vote', component: ListWithPointsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'vote' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
