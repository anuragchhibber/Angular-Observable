import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';

export const routes: Routes = [
   { path: 'login', component: LoginComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);