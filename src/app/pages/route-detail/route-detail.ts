import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-route-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './route-detail.html',
  styleUrls: ['./route-detail.css']
})
export class RouteDetail implements OnInit {
  route: any = null;
  stops: any[] = [];
  landmarks: any[] = [];
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private supabase: SupabaseService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    await this.loadRoute(id);
  }

 async loadRoute(id: any) {
  this.loading = true;
  try {
    const numericId = Number(id);
    const routes = await this.supabase.searchRoutes('', '');
    this.route = routes.find((r: any) => r.id === numericId);
    this.stops = await this.supabase.getStopsByRoute(numericId);
    this.landmarks = await this.supabase.getLandmarksByRoute(numericId);
    console.log('Route:', this.route);
    console.log('Stops:', this.stops);
    console.log('Landmarks:', this.landmarks);
  } catch (error) {
    console.error('Error loading route:', error);
  }
  this.loading = false;
  this.cdr.detectChanges();
}

  goBack() {
    this.router.navigate(['/results']);
  }
}