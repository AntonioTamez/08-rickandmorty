import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Character } from '../interfaces/interfaces';
import { AnimationController, IonInfiniteScroll, IonSearchbar, ModalController } from '@ionic/angular';
import { BuscarPersonajePage } from '../pages/buscar-personaje/buscar-personaje.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  @ViewChild( IonInfiniteScroll , {static : true}) infiniteScroll : IonInfiniteScroll;
  @ViewChild ( IonSearchbar ) ionSearchBar : IonSearchbar;
  @ViewChild("button", { read: ElementRef, static: true }) button: ElementRef;
 
  @Input() EpisodiosTotales : number = 0; 
  public characters: Character[] = [];

  constructor(private apiService: ApiService,
              private animationCtrl: AnimationController,
              private modalCtrl: ModalController) {}

  ngAfterViewInit() {
    //this.animateButton()
  }
              
  public animateButton() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .iterations(Infinity)
      .fromTo("--background", "green", "blue")
            
        animation.play()
    }

  // public pulseButton() {
  //   const animation = this.animationCtrl
  //     .create()
  //     .addElement(this.button.nativeElement)
  //     .duration(1500)
  //     .iterations(Infinity)
  //     .keyframes([
  //       { offset: 0, boxShadow: "primary" },
  //       { offset: 0.7, boxShadow: "0 0 0 10px rgba(44, 103, 255, 0)" },
  //       { offset: 1, boxShadow: "0 0 0 0 rgba(44, 103, 255, 0)" }
  //     ]);
  
  //     animation.play();
  //   }
   
  ngOnInit() {
    this.getCharacters();
  }

  //#region Metodos

  getCharacters(){

    this.apiService.getCharacters().subscribe( resp => {
        
      this.EpisodiosTotales = resp.info.count;
       
      if(resp.results.length > 0)
      { 
        this.characters.push( ...resp.results);
 
        if(resp.info.next === null){
          this.infiniteScroll.disabled = true;
          return;
        }
      }
    });

    this.infiniteScroll.complete();

  }

  async BuscarPersonaje(){
    const modal = await this.modalCtrl.create({
      component: BuscarPersonajePage,
      animated:true,
      swipeToClose:true, 
      showBackdrop:true,
      backdropDismiss:true, 
    });

    modal.present();
  }

  //#endregion


  //#region Eventos

  loadData( evt ){
    
    if(this.ionSearchBar.value.length === 0)
    {
      this.getCharacters();
    }  
  }

  onSearchBarFocus(){
    this.BuscarPersonaje();
  }

  //#endregion

 
}
