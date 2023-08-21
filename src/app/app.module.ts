import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { SigninComponent } from './signin/signin.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './signin/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    SigninComponent,
    ListComponent,
    HomeComponent,
    ProductdetailsComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
