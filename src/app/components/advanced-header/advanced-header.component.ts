import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-advanced-header',
  templateUrl: './advanced-header.component.html',
  styleUrls: ['./advanced-header.component.scss'],
})
export class AdvancedHeaderComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() image: string = ''; 

  imagenParaMostrar : string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
 
    if(this.image != ''){
      this.imagenParaMostrar = this.image;
    } else {
      this.imagenParaMostrar = '../../../assets/img/earth.jpg';
    }

  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
