import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';


const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'addproducts', component: AddproductsComponent },
  { path: 'contactus', component: ContactusComponent},
  
  { path: 'signup', component: SignupComponent },
  { path: 'cartitems', component: CartitemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
