import { Route } from '@angular/router';

export const mainRoutes: Route[] = [
  {path: 'home', loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent)},
  {path: 'about', loadComponent: () => import('./app/about/about.component').then(m => m.AboutComponent)},
]
