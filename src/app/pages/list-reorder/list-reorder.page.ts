import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  bandera: boolean = false;
  icono: string = 'checkmark-circle-outline';

  constructor() { }

  ngOnInit() {
  }


  doReorder(event: any) {
    console.log(event);

    const itemMoiver = this.personajes.splice(event.detail.from, 1)[0]
    this.personajes.splice(event.detail.to, 0, itemMoiver);

    event.detail.complete();
   console.log(this.personajes);
  }

  inhabilitar(){
    this.bandera = !this.bandera;
    this.icono = this.bandera ? 'checkmark-circle-outline':'close-circle-outline';
  }

}
