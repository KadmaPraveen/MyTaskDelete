import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: AdmindashboardComponent },
  { path: 'product', component: ProductsListComponent },
  { path: 'users', component: UsersListComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
