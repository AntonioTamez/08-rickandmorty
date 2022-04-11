 
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Characters, Locations,Episode, Episodes } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private charactersPage = 0;
  private charactersByNamePage = 0; 
  private oldName = "";
  private locationPage = 0; 

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
     //console.log('api.service - getCharacters ',query);
    return this.ejecutarQuery<Characters>(query);
  }

  getCharactersByName(name: string){
 
    if(this.oldName != name){
      this.charactersByNamePage = 0;
    }

    this.oldName = name;
    this.charactersByNamePage ++;
 
     const query =`/character?name=${name}&page=${this.charactersByNamePage}`
     //console.log('api.service - getCharactersByName ',query);
     return this.ejecutarQuery<Characters>(query);
 
  }

  getLocation(){ 
    this.locationPage ++
    const query =`/location?page=${this.locationPage}`
    return this.ejecutarQuery<Locations>(query);
  }

  getLocationById(url: string):Observable<Location>{

    const id = url.split('/')[5]
    const query = `/location/${id}`;
    console.log("getLocationById",query);
    return this.ejecutarQuery<Location>(query);

  }

  getEpisode(page: number):Observable<Episodes>{
    const query = `/episode?page=${page}`;
    //console.log('api.service - getEpisode ',query);
    return this.ejecutarQuery<Episodes>(query);
  } 

  getAllEpisodes(){
    let pageAllEpisodes = 1;
 
    const query = `/episode?page=${1}`;

  }

  getEpisodeById(id: string):Observable<Episode>{
    const query = `/episode/${id}`;
    // console.log('api.service - getEpisodeById ',query);
    return this.ejecutarQuery<Episode>(query);
  } 

   

}
