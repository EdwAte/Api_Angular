import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private URLBase = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  cargarPersonajes(): Observable<any>{
    return this.http.get(this.URLBase +'/character')
  }

  cargarLocalizacion(): Observable<any>{
    return this.http.get(`${this.URLBase}/episode`)
  }
  cargarEpisodio(): Observable<any>{
    return this.http.get(`${this.URLBase}/episode`);
  }
} 