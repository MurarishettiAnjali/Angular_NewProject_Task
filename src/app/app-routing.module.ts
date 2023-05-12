import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DietplanComponent } from './user/userhome/dietplan/dietplan.component';
import { DietplanformComponent } from './admin/home/dietplanform/dietplanform.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {
    path:"add-diet-plan",
    component: DietplanformComponent
  },
  {
    path:"diet",
    component:DietplanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
