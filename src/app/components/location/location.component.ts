import { Component, Input, OnInit } from '@angular/core';
import { Location, Character } from 'src/app/interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { Locations } from '../../interfaces/interfaces';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  @Input() locaciones: string;

  public location : Location ;

  public created : string;
  public dimension : string;
  public id : number;
  public name : string;
  public residents : string[];
  public type : string;

  public Characters: Character[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {  
    this.loadLocation();
  }


  loadLocation(){
 
    const id =this.locaciones.split('/')[5]

    this.apiService.getLocationById2(id)
    .subscribe(resp => {
      this.created = resp.created;
      this.dimension = resp.dimension;
      this.id = resp.id;
      this.name = resp.name;
      this.residents = resp.residents;
      this.type = resp.type;

      this.residents.forEach(element => {
        //console.log(element.split('/')[5]);
        this.apiService.getCharactersById(element.split('/')[5]).subscribe(resp => {
          //console.log(resp);
          this.Characters.push(resp);
        } );
      });


    })
  }

  loadLocation2(){
    this.apiService.getLocationById(this.locaciones)
    .subscribe(resp => {

      //console.log(resp);
 
      this.created = resp.created;
      this.dimension = resp.dimension;
      this.id = resp.id;
      this.name = resp.name;
      this.residents = resp.residents;
      this.type = resp.type;

    })
  }

  


}
