import { BackgroundColorOptions } from './../../../node_modules/@capacitor/status-bar/dist/esm/definitions.d';
import { Component } from '@angular/core';
import { StatusBar, Style, Animation } from '@capacitor/status-bar'
import { isPlatform } from '@ionic/angular';
 


// iOS only
window.addEventListener('statusTap', function () {
  console.log('statusbar tapped');
});

// Display content under transparent status bar (Android only)
StatusBar.setOverlaysWebView({ overlay: false });

const setStatusBarStyleDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark });
};

const setStatusBarStyleLight = async () => {
  await StatusBar.setStyle({ style: Style.Light });
};

const hideStatusBar = async () => {
  await StatusBar.hide();
};

const showStatusBar = async () => {
  await StatusBar.show();
};

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  visible = true;
  overlays = false;


  constructor() {}
 
  ionViewWillEnter(){

    if(isPlatform('mobile')){
      StatusBar.setStyle({style: Style.Dark});
      this.changeStyles();
    }
    //StatusBar.setBackgroundColor({style: })
  }

  toogleVisibility(){
    if(this.visible){
      StatusBar.hide({animation: Animation.Slide});
    } else {
      StatusBar.show({animation: Animation.Fade});
    }
    this.visible = !this.visible;
  }

  changeStyles(){
    const options : BackgroundColorOptions = {
      color : '#0b1e2d'
    }
    StatusBar.setBackgroundColor(options);
  }

  onclick(evt){
    console.log(evt);
  }

  selectedTab2(){
    console.log("tab2");
  }

  selectedTab3(){
    console.log("tab3");
  }

}
