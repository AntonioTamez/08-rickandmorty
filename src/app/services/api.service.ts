import { Episode } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private charactersPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string){
    query = URL + query;
     
    //query += `&api_key=${ apikey }&language=es&include_image_language=es`;

    //(query);
    return this.http.get<T>( query );
  }

  getCharacters(){
    this.charactersPage ++;  
    const query =`/character?page=${this.charactersPage}`
    // console.log('api.service - getCharacters ',query);
    return this.ejecutarQuery<Characters>(query);
  }

  getEpisodeById(id: string):Observable<Episode>{
    const query = `/episode/${id}`;
    // console.log('api.service - getEpisodeById ',query);
    return this.ejecutarQuery<Episode>(query);
  } 

   

}
