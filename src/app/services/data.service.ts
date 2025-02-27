import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbunes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(delay( 1500 ));
  }
}
