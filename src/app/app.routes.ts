import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./presentation/container/home/home').then(c => c.Home)
  },
  {
    path: 'home',
    loadComponent: () => import('./presentation/container/home/home').then(c => c.Home)
  }
];
