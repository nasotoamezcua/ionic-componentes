import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }


  //position: 'top' | 'middle' | 'bottom'

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 2000,
    });

    await toast.present();
    

  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast Header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side:'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite cliked');
          }
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel cliked');
          }
        },

      ]
    });

    toast.present();
  }

}
