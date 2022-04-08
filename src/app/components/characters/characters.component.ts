import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { IonItem, IonList, ModalController } from '@ionic/angular';
import { Character } from 'src/app/interfaces/interfaces';
import { CharacterComponent } from '../character/character.component';
 

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {

  @Input() characters : Character[] = [];
  @ViewChild(IonList) ionList : IonList;  

  favorito: boolean = false;

  slideOpts = {
    slidesPerView: 3.3, 
    freeMode: true,  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 5.5,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 7.5,
        spaceBetween: 30
      }
    }
  };
  
  constructor(public modalCtrl: ModalController) { }
    
  favorite(character : Character){
    console.log("favorite",character);
    this.ionList.closeSlidingItems();
  }

  async verDetalle(character : Character){
 

    const modal = await this.modalCtrl.create({
      component: CharacterComponent,
      animated:true,
      swipeToClose:true, 
      showBackdrop:true,
      backdropDismiss:true,
      cssClass:"animate__backInLeft",
      componentProps: {
        character: character,
        
      }
    });

    modal.present();
  }
   
  onClick(){
    this.favorito = !this.favorito
  }
  
}
