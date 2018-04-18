import { Routes } from '@angular/router';
import { MainLandingViewComponent } from '../features/views/main-landing-view/main-landing-view.component';

export const AppRoutes: Routes = [
    {path: '', loadChildren: 'app/features/features.module#FeaturesModule'}
];
