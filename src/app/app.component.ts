import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from './service/weather-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer: any;

   constructor(private _weatherService: WeatherService, private _router: Router) {
    this._weatherService.setWeather('San Francisco, CA');
    this.timer = setTimeout(() => this.checkStatus(), 500);
  }

  checkStatus() {
    if (this._weatherService.weatherData !== undefined) {
      clearTimeout(this.timer);
      this._router.navigate(['/home']);
    }
  }
}
