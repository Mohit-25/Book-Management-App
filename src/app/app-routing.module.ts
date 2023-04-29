import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BookCriteriaComponent } from './book-criteria/book-criteria.component';

const routes: Routes = [
  {
    component:SignupComponent,path:"signup"
    
  },
  {
    component:LoginComponent,path:"login"
    
  },
  {
    component:ForgetPasswordComponent,path:"forget-password"
  },
  {
    component:AddbookComponent,path:"addbook"
  },
  {
    component:ListBookComponent,path:"listbook"
  },
  {
    component:BookCriteriaComponent,path:"searchbook"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
