import { Injectable } from '@angular/core';
import { WeatherForecastModel } from '../../models/weather-forecast.model/weather-forecast.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor(private http: HttpClient){
  }
    getWeatherForecast(): Observable<WeatherForecastModel[]> {
      return this.http.get<WeatherForecastModel[]>('https://localhost:7193/WeatherForecast');
    }
}

