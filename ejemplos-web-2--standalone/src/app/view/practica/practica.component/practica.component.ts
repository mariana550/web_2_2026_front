import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-practica',
  imports: [],
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css'],
})
export class practicaComponent {
  exampleApi: any = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
    this.getExampleApi();
  }
  getExampleApi(){
    this.http.get<any>('https://randomuser.me/api/?results=5').subscribe(data => {
    this.exampleApi = data.results;
  console.log("Datos de la api:", this.exampleApi);    
  this.cdr.detectChanges();  
}); 
  }
}

