import { Route } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./inicio/inicio.component').then(c => c.InicioComponent) },
] satisfies Route[];