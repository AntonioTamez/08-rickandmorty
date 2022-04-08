import { BackgroundColorOptions } from './../../../node_modules/@capacitor/status-bar/dist/esm/definitions.d';
import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar'
import { isPlatform } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
 
 
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
 
  _temaFavorito : string;

  constructor(private storageService: StorageService) {}
  
  async ionViewWillEnter(){

    if(isPlatform('mobile')){
      window.addEventListener('statusTap', function () {
        console.log('statusbar tapped');
      });
      StatusBar.setOverlaysWebView({ overlay: false }).catch( resp => {
        console.log("ionViewWillEnter - setOverlaysWebView ");
      });
      StatusBar.setStyle({style: Style.Dark}).catch( resp => {
        console.log("ionViewWillEnter - setStyle ");
      });
      this.changeStyles();
    }

    StatusBar.setBackgroundColor({color: '#0b1e2d' }).catch( resp => {
      console.log("ionViewWillEnter - setBackgroundColor ");
    });

 
    this.loadTema();


  }


  async loadTema(){
    this._temaFavorito = await this.storageService.CargarTemaFavorito();
     
    if(this._temaFavorito !== null){
      document.body.setAttribute('color-theme',this._temaFavorito)
    } else
    {
      document.body.setAttribute('color-theme','dark')
      this.storageService.GuardarTema('dark')
    }
  }

  // toogleVisibility(){
  //   if(this.visible){
  //     StatusBar.hide({animation: Animation.Slide});
  //   } else {
  //     StatusBar.show({animation: Animation.Fade});
  //   }
  //   this.visible = !this.visible;
  // }

  changeStyles(){
    const options : BackgroundColorOptions = {
      color : '#0b1e2d'
    }
    StatusBar.setBackgroundColor(options).catch( resp => {
      console.log("changeStyles - setBackgroundColor ");
    });
  } 
}
