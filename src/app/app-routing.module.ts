import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DestinationSelectComponent } from './destination-select/destination-select.component';

const routes: Routes = [{path: '',redirectTo: '/navigate',pathMatch:'full'},
                        {path: 'navigate', component: NavigationComponent},
                        {path:"signUp", component:SignupComponent},
                        {path:"signIn", component:SigninComponent},
                        {path:"destination-select", component:DestinationSelectComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
