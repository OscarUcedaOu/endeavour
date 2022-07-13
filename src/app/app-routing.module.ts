import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'detail',
    component: DetailPageComponent
  },
  {
    path:'**',
    redirectTo:'/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
