import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage: string = '';
  roleMessage: string = '';


  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }

  //Alerta Basico
  async presentAlertController() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //Alerta con Multiples Botones
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class', Colocar una clase personalizada
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Click en Ok';
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Click en cancelar'; //Aqui se pueden llamr servicios o logica
          },
        },
      ],
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    //this.roleMessage = `Dismissed with role: ${role}`;

    console.log(result);
    
  }


  //Alertas Input
  async presentAlertInput() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Please enter your info',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name: '2',
          type: 'text',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: '3',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: '4',
          type: 'date',
          min: '2015-01-01',
          max: '2025-12-31'
        },
        {
          name: '5',
          type: 'url',
          value:  'https://ionic.io/ionicons',
          placeholder:  'Direccion Url',
        },
        {
          name: '6',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [
        {
          text: 'OK',
          role: 'confirm'
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            //this.handlerMessage = 'Click en cancelar'; //Aqui se pueden llamr servicios o logica
          },
        },
      ],
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    if(result.role === 'confirm') console.log(result);
    
  }

  

}
