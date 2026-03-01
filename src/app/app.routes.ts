import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RouteResults } from './pages/route-results/route-results';
import { RouteDetail } from './pages/route-detail/route-detail';
import { AdminLogin } from './pages/admin/login/login';
import { AdminDashboard } from './pages/dashboard/dashboard';
import { AdminCorridors } from './pages/corridors/corridors';
import { AdminStops } from './pages/stops/stops';
import { AdminShouts } from './pages/shouts/shouts';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'results', component: RouteResults },
  { path: 'route/:id', component: RouteDetail },
  { path: 'admin/login', component: AdminLogin },
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'corridors', component: AdminCorridors },
      { path: 'stops', component: AdminStops },
      { path: 'shouts', component: AdminShouts },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];