import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Episodes, Episode, InfoEpisode } from '../interfaces/interfaces';
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  season: string = ''; 
  episodes: Episodes[] = [];
  episode: Episode[] = [];
  actualPage: number = 1;
  totalPage: number = 0;
  filtroBusqueda: string = '';
  temporadas : any[];

  constructor(private apiService: ApiService) {
    this.temporadas = [
      '',
      '1',
      '2',
      '3',
      '4',
      '5',
    ].map((val) => ({
      title: val === ''? `Todas` : `S0${val}`,
      value: val === ''?  `` : `S0${val}`,
      selected:false
    }));

    //console.log(this.temporadas);
    setTimeout(() => {
      this.selectSegment(0);
    }, 0);

  }


  selectSegment(index:any){
    this.temporadas.map((item) => (item.selected = false));
    this.temporadas[index].selected = true;
  }

  ngOnInit(){
    this.getEpisode(0);
  }

 

  segmentChanged(event){
  
    if(event.detail.value === 'Todas'){
      return this.filtroBusqueda = '';
    }

    this.filtroBusqueda = event.detail.value;

  }

  getEpisode(episode: number){

    if(episode === 0){ 
      this.apiService.getEpisode(1).subscribe( resp => {
        this.episode.push(...resp.results);
        return;
      });
    }

    

    this.apiService.getEpisode(episode).subscribe( resp => {
      
      this.totalPage = resp.info.pages  
      
      
      while (this.actualPage < this.totalPage) {
        this.actualPage++
    
        this.apiService.getEpisode(this.actualPage).subscribe(resp => {
          this.episode.push( ...resp.results);
        });
  
      }
 
      
    });
  }


  


  


}
