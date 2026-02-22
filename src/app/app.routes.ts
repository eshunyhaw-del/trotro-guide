import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RouteResults } from './pages/route-results/route-results';
import { RouteDetail } from './pages/route-detail/route-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'results',
    component: RouteResults
  },
  {
    path: 'route/:id',
    component: RouteDetail,
    data: { renderMode: 'client' }
  }
];