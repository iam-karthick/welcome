import { ModuleWithProviders } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SkilsComponent } from './skils/skils.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
    { 
        path:'',
        component: HomeComponent,
    },
    {
        path:'portfolio',
        component: MainComponent,
    },
    {
        path:'skill',
        component: SkilsComponent,
    },
    {
        path:'hobbies',
        component: HobbiesComponent,
    },
];
export const route : ModuleWithProviders=RouterModule.forRoot(routes);