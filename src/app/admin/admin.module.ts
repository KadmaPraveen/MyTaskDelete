import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdmindashboardComponent,
    LeftsideComponent,
    ProductsListComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
