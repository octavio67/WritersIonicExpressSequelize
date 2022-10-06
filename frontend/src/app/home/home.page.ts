import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WriterService } from '../services/writer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private writerService: WriterService,
    public alertController: AlertController) {}

  gotoListWriters() {
    this.router.navigateByUrl('/list-writers');
  }

  gotoCreateWriters() {
    this.router.navigateByUrl('/new-writers');
  }

  async deleteAllWriters() {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      subHeader: 'Todos los escritores serán eliminados',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.writerService.deleteAllWriters().subscribe(() => {
              console.log('Todos los escritores borrados');
            });
          },
        },
      ],
    });
    await alert.present();
  }
}

