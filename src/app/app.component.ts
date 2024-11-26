import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { Platform } from '@ionic/angular';

import { register } from 'swiper/element/bundle';


register(); //Funcion Global para utilizar el elemnto Swiper


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  componentes!: Observable<Componente[]>;
  
  constructor(private platform: Platform,
    private dataService: DataService) {
      this.initializeApp();
    }
 

  initializeApp(){
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOpts();
    } );
  }
}


