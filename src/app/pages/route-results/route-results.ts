import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-route-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './route-results.html',
  styleUrls: ['./route-results.css']
})
export class RouteResults implements OnInit {
  from: string = '';
  to: string = '';
  routes: any[] = [];
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private supabase: SupabaseService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.from = this.activatedRoute.snapshot.queryParams['from'] || '';
    this.to = this.activatedRoute.snapshot.queryParams['to'] || '';
    await this.searchRoutes();
  }

  async searchRoutes() {
    this.loading = true;
    try {
      this.routes = await this.supabase.searchRoutes(this.from, this.to);
    } catch (error) {
      console.error('Search error:', error);
      this.routes = [];
    }
    this.loading = false;
    this.cdr.detectChanges();
  }

  viewRoute(id: number) {
    this.router.navigate(['/route', id]);
  }
}