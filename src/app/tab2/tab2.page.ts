import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Character, Location } from '../interfaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';
 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit { 

  public locations : Location[] = [];
  public characters: Character[] = [];
  data :any[] = []; 
  
  @ViewChild( IonInfiniteScroll , {static : true}) infiniteScroll : IonInfiniteScroll;
 
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  buttonClick(){
    
  }

   

  loadData(){

    setTimeout(() => {
      this.apiService.getLocation().subscribe(resp => {
         
        if(resp.results.length > 0)
        { 
          this.locations.push( ...resp.results);
   
          if(resp.info.next === null){
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return;
          }
        }
         
      });

      this.infiniteScroll.complete();

    }, 850);
  }

 
 
  

}
