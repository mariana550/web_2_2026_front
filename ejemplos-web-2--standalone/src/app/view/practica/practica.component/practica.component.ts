import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-practica',
  imports: [],
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css'],
})
export class practicaComponent {
  practica: any[] = [];
  exampleApi: any = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
    this.getPractica();
    this.getExampleApi();
  }
  getPractica(){
     this.http.get<any[]>('practica.json').subscribe(data => {
      this.practica = data;
      console.log("Datos de la api:", this.practica);  
      this.cdr.detectChanges();  
    }); 
  }
  getExampleApi(){
    this.http.get<any>('https://randomuser.me/api/').subscribe(data => {
     this.exampleApi = data.results;
     console.log("Datos de la api:", this.exampleApi);    
     this.cdr.detectChanges();  
   }); 
  }
}

