import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'about-me',
        component: AboutMeComponent
    },,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
