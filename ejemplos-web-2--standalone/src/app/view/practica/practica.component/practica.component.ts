import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { PracticaService } from '../../../services/practica.service/practica.service';

@Component({
  selector: 'app-practica.component',
  imports: [],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css',
})
export class practicaComponent {
  exampleApi: any = [];

  constructor(private userPractica: PracticaService, private cdr: ChangeDetectorRef){
      this.userPractica.getPracticas().subscribe(data =>{
        this.exampleApi = data.results;
        console.log(this.exampleApi);
        this.cdr.detectChanges();      
      });
    }
  }

