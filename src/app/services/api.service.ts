 
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Characters, Locations, Episode, Episodes, Location, LocationWithCharacters, Character } from '../interfaces/interfaces';
import { concat, Observable } from 'rxjs'; 

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

    // // console.log("query",query);
    return this.http.get<T>( query );
  }

  getCharacters(){
    this.charactersPage ++; 
    const query =`/character?page=${this.charactersPage}`
     //console.log('api.service - getCharacters ',query);
    return this.ejecutarQuery<Characters>(query);
  }

  getCharactersById(id: string){
    this.charactersPage ++; 
    const query =`/character/${id}`
     //console.log('api.service - getCharacters ',query);
    return this.ejecutarQuery<Character>(query);
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

  getLocationById2(id: string):Observable<Location>{
     
    const query = `/location/${id}`;
    //console.log('api.service - getLocationById ',query);
    return this.ejecutarQuery<Location>(query);
  }


  getLocationById(locaciones: string){

    var info : LocationWithCharacters;
    var info2 : Observable<LocationWithCharacters>;
    var location : Location;
    var character : Character;
    let character_id : string;
   
    const id = locaciones.split('/')[5]
    const query = `/location/${id}`; 

    var data = this.ejecutarQuery<Location>(query);
    data.subscribe(resp => {

      if(resp.id > 0){

         location = resp; 

         console.log("entro 1");
        

         location.residents.forEach(element => {

          console.log("entro 2");

            character_id = element.split('/')[5];
            //console.log(element.split('/')[5]);
            console.log("entro 3");

            this.getCharactersById(character_id).subscribe(resp => {
              
              
         console.log("entro 4", resp);
              character = resp 
              
         console.log("entro 5");
              //console.log(character);
            });

         });

      }

       //info.concat(location,character)
       

       info.Location = location;
       info.Character = character;
       
    })

     return data;
     //return info
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
    //console.log('api.service - getEpisodeById ',query);
    return this.ejecutarQuery<Episode>(query);
  } 

   

}
