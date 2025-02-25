import { Routes } from '@angular/router';

import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { LoginComponent } from './guest/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },
];
