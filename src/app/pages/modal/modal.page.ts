import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  constructor(private modalCtrl: ModalController) { }

  async ngOnInit() {

    
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Nestor',
        pais: 'Ciudad de Mexico'
      }
    });
    
    
    await modal.present();

    //const { data } = await modal.onDidDismiss(); //Se muestra la data despues de cerrar la ventana modal
    //console.log("onDidDismiss");

    const { data } = await modal.onWillDismiss(); //Se muestra la data antes de cerrar la ventana modal
    console.log("onWillDismiss");
    console.log(JSON.stringify(data));

  }

}
