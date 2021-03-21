import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LightComponent } from './light/light.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'light',
  },
  {
    path:'light',
    component: LightComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'  App',
component:  AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
