import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
    weatherData: any;
    query: string;
    urlBase = 'https://query.yahooapis.com/v1/public/yql?q=';
    getURL: string;

    constructor(private _http: Http) {}

    getWeather(city: string) {
        this.query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'
            + city + '")';
        this.query = encodeURIComponent(this.query);
        this.getURL = this.urlBase + this.query + '&format=json';

        return this._http.get(this.getURL).map((res: Response) => res.json());
    }

    setWeather(city: string) {
        this.getWeather(city)
        .subscribe(
          data => this.weatherData = data,
          error => console.log('Error: ' + error),
          () => {
            console.log(this.weatherData);
          }
        );
    }

}





