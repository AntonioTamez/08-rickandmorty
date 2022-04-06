import { BackgroundColorOptions } from './../../../node_modules/@capacitor/status-bar/dist/esm/definitions.d';
import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar'
import { isPlatform } from '@ionic/angular';
 
 
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
 
  constructor() {}
  
  ionViewWillEnter(){

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
    StatusBar.setBackgroundColor({color: '#0b1e2d' })
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
