import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fraxisearch-frontend';
  countdownValue: number = 5;

  constructor() {
    setInterval(() => {
      this.countdownValue--;
      if (this.countdownValue === 0) {
        this.countdownValue = 60;
      }
    }, 1000);
  }
}
