import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/interfaces';
import { CharacterComponent } from '../character/character.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  @Input() characters : Character[] = [];
  
 

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
 
  }

  async verDetalle(character : Character){
 

    const modal = await this.modalCtrl.create({
      component: CharacterComponent,
      mode:"ios",
      animated:true,
      swipeToClose:true, 
      showBackdrop:true,
      backdropDismiss:true,
      cssClass:"animate__backInDown",
      componentProps: {
        character: character,
        
      }
    });

    modal.present();
  }

}
