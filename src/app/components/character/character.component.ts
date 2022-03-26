import { Component, Input, OnInit } from '@angular/core';
import { Character, Episode } from '../../interfaces/interfaces';
import { IonCardContent, ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
 
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  @Input() character : Character; 
 
  personaje : Character;
  episodes : Episode[] = [];

  cadena : string = "https://rickandmortyapi.com/api/episode/";
  id : string;
  slideOpts = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 600,
    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    loop: true,
  };


  constructor(private modalCtrl: ModalController,
              private api: ApiService) { }

  ngOnInit() {
 
    this.personaje = this.character;
    
    this.character.episode.forEach(element => {

      this.id = element.slice(this.cadena.length,element.length);
 
      this.api.getEpisodeById(this.id).subscribe(
        (data: Episode) => {
          this.episodes.push(data);
        });


    });

    this.episodes = this.episodes.sort( (a,b) => a.id-b.id ); 
  }

  regresar(){ 
    this.modalCtrl.dismiss()
  }

  buttonClick(){
    console.log("buttonClick");
  }

}
