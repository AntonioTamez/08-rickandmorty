import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  private _storage: Storage | null = null;
  _temaFavorito : string;


  constructor(private storage: Storage) {
    this.initDB(); 
    this.CargarTemaFavorito();
}


async initDB(){
  // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  const storage = await this.storage.create();
  this._storage = storage;
}

  GuardarTema(nombre: string){
    this._storage.set('tema',nombre);
    this._temaFavorito = nombre;
  }

  async CargarTemaFavorito(){
    const tema = await this.storage.get('tema');
    this._temaFavorito = tema;
    console.log("storage.service CargarTemaFavorito", this._temaFavorito);
    return this._temaFavorito;
  }


  // private _storage: Storage | null = null;

  // private _nombreTema : string;

  // constructor(private storage: Storage) {
  //   this.init();
  //  }

  //  async init() { 

  //   const storage = await this.storage.create();
  //   this._storage = storage;
    
  //   const tema = await this._storage.get('tema');
  //   console.log("storage.service init", tema);
  //   this._nombreTema = tema;
    
  //   //this.loadTema(); 
  // }

 
  
  // async loadTema() {
 

  //     const tema = await this._storage.get('tema');
  //     console.log("storage.service loadTema", tema);
  //     if(tema !== null){
  //       this._nombreTema = tema;
  //     }
  //     console.log("api.service loadTema", tema);
  //     return tema;

  
  // }
  
  // saveTheme(nombre: string){
  //   this._storage.set('tema',nombre);
  //   this._nombreTema = nombre;
  // }

  // async getTema(){ 

  //   console.log("entro en getTema()");
  //   const tema = await this._storage.get('tema');
  //   this._nombreTema = tema
  //   console.log("storage.service getTema", this._nombreTema);
  //   //const tema =  await this._storage.get('tema');
  //   return this._nombreTema;
  // }

 

}
