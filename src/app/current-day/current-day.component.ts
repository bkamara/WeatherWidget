import { Component } from '@angular/core';
import { WeatherService } from '../service/weather-service.service';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['../app.component.css', './current-day.component.css']
})
export class CurrentDayComponent {

  time: any;
  date: string;
  today: Date;
  city: string;
  region: string;
  country: string;
  forecast: any;
  tempUnit: string;

  update() {
    this.today = new Date();
    this.date = this.getDayofWeek(this.today.getDay()) + ', ' + this.getMonth(this.today.getMonth()) + ' '
      + this.today.getDate() + ', ' + this.today.getFullYear();
    this.time = this.today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.city = this._weatherService.weatherData.query.results.channel.location.city;
    this.region = this._weatherService.weatherData.query.results.channel.location.region;
    this.country = this._weatherService.weatherData.query.results.channel.location.country;
    this.tempUnit = this._weatherService.weatherData.query.results.channel.units.temperature;
    this.forecast = this._weatherService.weatherData.query.results.channel.item.forecast;
    const timer = setTimeout(() => { this.update(); }, 50);
  }

  getDayofWeek(weekday: number): string {
    switch (weekday) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  }

  getMonth(month: number): string {
    switch (month) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
    }
  }
  selectImage(condition: string) {
    switch (parseInt(condition, 10)) {
      case 0: return 'Tornado.svg';
      case 1: return 'Wind.svg';
      case 2: return 'Cloud-Rain.svg';
      case 3:
      case 4: return 'Cloud-Lightning.svg';
      case 5:
      case 6:
      case 7: return 'Cloud-Hail.svg';
      case 8:
      case 9: return 'Cloud-Drizzle.svg';
      case 10:
      case 11:
      case 12: return 'Cloud-Rain.svg';
      case 13:
      case 14: return 'Cloud-Snow.svg';
      case 15:
      case 16: return 'Snowflake.svg';
      case 17: return 'Cloud-Hail-Alt.svg';
      case 18:
      case 19:
      case 20: return 'Cloud-Fog.svg';
      case 21:
      case 22:
      case 23: return 'Cloud-Fog-Alt.svg';
      case 24: return 'Cloud-Wind.svg';
      case 25: return 'Thermometer-Zero.svg';
      case 26: return 'Cloud.svg';
      case 27: return 'Cloud-Moon.svg';
      case 28: return 'Cloud-Sun.svg';
      case 29: return 'Cloud-Moon.svg';
      case 30: return 'Cloud-Sun.svg';
      case 31: return 'Moon.svg';
      case 32: return 'Sun.svg';
      case 33: return 'Moon.svg';
      case 34: return 'Sun.svg';
      case 35: return 'Cloud-Hail.svg';
      case 36: return 'Sun.svg';
      case 37:
      case 38:
      case 39: return 'Cloud-Lightning.svg';
      case 40: return 'Cloud-Rain.svg';
      case 41:
      case 42:
      case 43: return 'Cloud-Snow.svg';
      case 44: return 'Cloud-Sun.svg';
      case 45: return 'Cloud-Lightning.svg';
      case 46: return 'Cloud-Snow.svg';
      case 47: return 'Cloud-Lightning.svg';
      default: return '';
    }
  }

  constructor(private _weatherService: WeatherService) {
    this.update();
  }
}
