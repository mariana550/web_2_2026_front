import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PracticaService {
  exampleApi: any = [];

  constructor(private http: HttpClient){
  }
  getExampleApi(){
    this.http.get<any>('https://randomuser.me/api/?results=5').subscribe(data => {
    this.exampleApi = data.results;
    console.log("Datos de la api:", this.exampleApi);
}); 
  }
}
