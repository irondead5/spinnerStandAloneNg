import { Route } from '@angular/router';

export default [
  { path: '', loadChildren: () => import('./admin/routes') },
] satisfies Route[];