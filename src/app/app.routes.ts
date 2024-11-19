import { ViewContentComponent } from './pages/view-content/view-content.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'view/:id', component: ViewContentComponent}
];
