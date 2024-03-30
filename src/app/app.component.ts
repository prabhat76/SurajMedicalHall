import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'}, 
})
export class AppComponent {
  title = 'SurajMedicall';
}
