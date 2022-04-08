import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonToggle } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page   {


  tema : string;
  _temaFavorito : string;

  @ViewChild(IonToggle) ionToogle : IonToggle;


  constructor(
    private alertCtrl: AlertController,
    private storageService: StorageService 
  ) { }


  async ionViewWillEnter(){
    this._temaFavorito = await this.storageService.CargarTemaFavorito();
    
    this.ionToogle.checked = this._temaFavorito === 'dark' ? true : false;

    // if(this._temaFavorito !== null){
    //   document.body.setAttribute('color-theme',this._temaFavorito)
    // }






  }

 

  onClick(event){
    if(event.detail.checked){

      document.body.setAttribute('color-theme','dark')
      this.storageService.GuardarTema('dark')

 
      
    } else {

      document.body.setAttribute('color-theme','light')
      this.storageService.GuardarTema('light')

 

    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Tema Oscuro',
      inputs: [
        {
          name: 'Deshabilitado',
          type: 'radio',
          label: 'Deshabilitado',
          value: 'value1',
          handler: () => {
            console.log('Deshabilitado selected');

            document.body.setAttribute('color-theme','light')
            this.storageService.GuardarTema('light')
            
            this.ionToogle.checked = false;

          },
          checked: this._temaFavorito === 'light' ? true : false
          
        },
        {
          name: 'Habilitado',
          type: 'radio',
          label: 'Habilitado',
          value: 'value2',
          handler: () => {
            console.log('Habilitado selected');

            document.body.setAttribute('color-theme','dark')
            this.storageService.GuardarTema('dark')

            this.ionToogle.checked = true;
 
          },
          checked: this._temaFavorito === 'dark' ? true : false
        }
      ],
      buttons: [
        {
          text: 'Salir',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        } 
      ]
    });

    await alert.present();
  }

  async showMessage(){
    this.presentAlert;
  }

  // colorTest(systemInitiatedDark) {
  //   if (systemInitiatedDark.matches) {
  //     document.body.setAttribute('data-theme', 'dark');		
  //   } else {
  //     document.body.setAttribute('data-theme', 'light');
  //   }
  // }

}
