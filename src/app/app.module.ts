import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CurrentDayComponent } from './current-day/current-day.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DefaultWeatherComponent } from './default-weather/default-weather.component';

import { WeatherService } from './service/weather-service.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CurrentDayComponent,
    SearchBarComponent,
    DefaultWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
