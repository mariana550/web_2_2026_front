import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../../../services/weather-forecast.service/weather-forecast.service';
import { Observable } from 'rxjs';
import { WeatherForecastModel } from '../../../models/weather-forecast.model/weather-forecast.model';


@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [],
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})

export class WeatherForecastComponent {

WeatherForecast$: Observable<WeatherForecastModel[]>;
  
  constructor(private clima: WeatherForecastService,private cdr: ChangeDetectorRef ) {

    this.WeatherForecast$ =this.clima.getWeatherForecast();

    this.clima.getWeatherForecast().subscribe(data =>{
      //this.WeatherForecast = data;
      console.log("Datos de la API:", data);
      this.cdr.detectChanges();      
    });
  }
}  