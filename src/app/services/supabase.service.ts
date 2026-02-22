import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getRegions() {
    const { data, error } = await this.supabase
      .from('regions')
      .select('*')
      .eq('is_active', true);
    if (error) throw error;
    return data;
  }

  async getStations() {
    const { data, error } = await this.supabase
      .from('stations')
      .select('*')
      .eq('is_active', true);
    if (error) throw error;
    return data;
  }

  async searchRoutes(origin: string, destination: string) {
  console.log('Searching for:', origin, destination);
  const { data, error } = await this.supabase
    .from('routes')
    .select('*')
    .eq('is_active', true);
  console.log('Data returned:', data);
  console.log('Error:', error);
  if (error) throw error;
  return data || [];
}

  async getStopsByRoute(routeId: number) {
    const { data, error } = await this.supabase
      .from('stops')
      .select('*')
      .eq('route_id', routeId)
      .eq('is_active', true)
      .order('stop_order', { ascending: true });
    if (error) throw error;
    return data;
  }

  async getLandmarksByRoute(routeId: number) {
    const { data, error } = await this.supabase
      .from('route_landmarks')
      .select('*')
      .eq('route_id', routeId)
      .order('order_on_route', { ascending: true });
    if (error) throw error;
    return data;
  }
}