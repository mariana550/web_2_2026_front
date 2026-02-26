import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';

export const routes: Routes = [
    {path: 'usuarios', component:UserComponent},
    {path: '', redirectTo:'usuarios', pathMatch:'full'}
];
