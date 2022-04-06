import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController,  IonInfiniteScroll, IonSearchbar } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Character } from '../../interfaces/interfaces';

@Component({
  selector: 'app-buscar-personaje',
  templateUrl: './buscar-personaje.page.html',
  styleUrls: ['./buscar-personaje.page.scss'],
})
export class BuscarPersonajePage implements OnInit {

  public characters : Character[] = [];
  buscando = false;

  @ViewChild( IonInfiniteScroll , {static : true}) infiniteScroll : IonInfiniteScroll;
  @ViewChild(IonSearchbar) searchBar : IonSearchbar;
 
  
  constructor(private modalCtrl: ModalController,
             private apiService: ApiService) { }

 
  // ionViewWillEnter() {
  //   setTimeout(() => this.searchbar.setFocus(), 300);
  // }
       
  ngOnInit() {   
     
  }

  clear(){
    this.characters = [];
  }

  cerrarVentana(){
    this.modalCtrl.dismiss();
  }

  onSearchChange(){
 
    setTimeout(() => {

      if(this.searchBar.value.length > 2){ 

        this.apiService.getCharactersByName(this.searchBar.value)
        .subscribe(resp => {

          if(resp.results.length > 0){
            this.characters.push(...resp.results)

            if(resp.info.next === null){
              this.infiniteScroll.disabled = true;
              return;
            }
          }

        });
      } else {
        this.characters = [];
      }
      this.infiniteScroll.complete();

    }, 120);

  }
 

}
