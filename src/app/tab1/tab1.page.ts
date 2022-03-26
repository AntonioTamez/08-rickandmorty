import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Character } from '../interfaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild( IonInfiniteScroll , {static : true}) infiniteScroll : IonInfiniteScroll;
  
  public characters: Character[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.getCharacters();

  }

  getCharacters(){
    this.apiService.getCharacters().subscribe( resp => {
        
      if(resp.results.length > 0)
      {
        this.characters.push( ...resp.results);

        if(resp.info.next === null){
          this.infiniteScroll.disabled = true;
          return;
        }
      }
    });
  }

 

  loadData(){
    
    this.getCharacters();
    this.infiniteScroll.complete();

  }

   

}
