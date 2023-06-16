import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { UpdateComponent } from './Components/update/update.component';
import { DetailsComponent } from './Components/details/details.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'',component : HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductListComponent},
  {path:'product/:id/edit',component:UpdateComponent},
  {path:'product/:id',component:DetailsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
