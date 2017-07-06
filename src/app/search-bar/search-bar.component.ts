import { Component } from '@angular/core';

import { WeatherService } from '../service/weather-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  location = '';

  constructor(private _weatherService: WeatherService) { }

  doSearch() {
    this._weatherService.setWeather(this.location);
  }
}
