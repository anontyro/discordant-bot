import { LandingBodyComponent } from './../../../components/landing-body/landing-body.component';
import { Routes } from '@angular/router';
import { MainLandingViewComponent } from '../main-landing-view.component';

export const mainRoutes: Routes = [
    {path: '', children: [
        {path: '', pathMatch: 'full', component: MainLandingViewComponent, children: [
            {path: '', pathMatch: 'full', component: LandingBodyComponent}
        ]}
    ]}
];
