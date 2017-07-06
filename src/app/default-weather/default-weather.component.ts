import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather-service.service';

@Component({
  selector: 'app-default-weather',
  templateUrl: './default-weather.component.html',
  styleUrls: ['./default-weather.component.css']
})
export class DefaultWeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() { }

}
