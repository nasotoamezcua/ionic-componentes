import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista1')  ionList!: IonList;

  usuarios!: Observable<any>; 

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(usuario : any) {
    console.log('favoritos', usuario);
    this.ionList.closeSlidingItems();
  }

  share(usuario : any) {
    console.log('compartir', usuario);
    this.ionList.closeSlidingItems();
  }

  eliminar(usuario : any) {
    console.log('eliminar', usuario);
    this.ionList.closeSlidingItems(); //metodo para cerrar el icon list al momento de seleccionar el boton
  }



}
