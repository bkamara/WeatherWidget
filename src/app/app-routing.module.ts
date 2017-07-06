import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultWeatherComponent } from './default-weather/default-weather.component';

const routes: Routes = [
  { path: 'home', component: DefaultWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
