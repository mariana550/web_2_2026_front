import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';
import { practicaComponent } from './view/practica/practica.component/practica.component';

export const routes: Routes = [
    {path: '', redirectTo:'usuarios', pathMatch:'full'},
    {path: 'usuarios', component:UserComponent},
    {path: 'practica', component:practicaComponent},
];
