import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: "contas",
    loadComponent: () => import('../modules/accounts/accounts.component').then(c => c.AccountsComponent)
  },
];
