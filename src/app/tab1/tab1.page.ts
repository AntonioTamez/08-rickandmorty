import {AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Character } from '../interfaces/interfaces';
import { AnimationController, IonInfiniteScroll, IonSearchbar } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild( IonInfiniteScroll , {static : true}) infiniteScroll : IonInfiniteScroll;
  @ViewChild ( IonSearchbar ) ionSearchBar : IonSearchbar;

  public characters: Character[] = [];
  @ViewChild("button", { read: ElementRef, static: true }) button: ElementRef

  constructor(private apiService: ApiService,
              private animationCtrl: AnimationController) {}

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

  public pulseButton() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.button.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, boxShadow: "primary" },
        { offset: 0.7, boxShadow: "0 0 0 10px rgba(44, 103, 255, 0)" },
        { offset: 1, boxShadow: "0 0 0 0 rgba(44, 103, 255, 0)" }
      ]);
  
      animation.play();
    }
   
  ngOnInit() {
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

    this.infiniteScroll.complete();

  }

  getCharactersByName(name : string){
    this.apiService.getCharactersByName(name).subscribe( resp => {
        
      if (resp.info.prev === null){
        this.characters = [];
      }

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
 
  loadData( evt ){
    
    if(this.ionSearchBar.value.length === 0)
    {
      this.getCharacters();
    } else {
      this.getCharactersByName(this.ionSearchBar.value.toString());
    }
  }



  onSearchChange(evt){ 

    this.getCharactersByName(this.ionSearchBar.value.toString());

  }

}
