import { Routes } from '@angular/router';
import { HomeComponent } from './apphome/apphome.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:"Home Page"},
    {path:'details/:id', component: DetailsComponent, title:"House Details"}
];
