import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  origin: string = '';
  destination: string = '';

  constructor(private router: Router) {}

  search() {
    console.log('Button clicked!', this.origin, this.destination);
    if (this.origin.trim() && this.destination.trim()) {
      this.router.navigate(['/results'], {
        queryParams: {
          from: this.origin,
          to: this.destination
        }
      });
    }
  }
}