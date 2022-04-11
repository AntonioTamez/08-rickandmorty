import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/interfaces/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  @Input() url: string;

  public locacion : Location[]; ;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log("ngoninit",this.url);

    this.apiService.getLocationById(this.url)
    .subscribe(resp => {
      console.log("location",resp);
      //this.locacion = resp;
    })
    
  }

}
