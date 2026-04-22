import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';
import { practicaComponent } from './view/practica/practica.component/practica.component';
import { WeatherForecastComponent } from './view/weather-forecast/weather-forecast.component/weather-forecast.component';

export const routes: Routes = [
    {path: '', redirectTo:'usuarios', pathMatch:'full'},
    {path: 'usuarios', component:UserComponent},
    {path: 'practica', component:practicaComponent},
    {path: 'weather', component:WeatherForecastComponent},
    
];
