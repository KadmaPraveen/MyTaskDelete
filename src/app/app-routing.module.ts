import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { RegisterComponent } from './signin/register/register.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: HomeComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
