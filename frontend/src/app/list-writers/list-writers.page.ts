import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WriterService } from '../services/writer.service';


@Component({
  selector: 'app-list-writers',
  templateUrl: './list-writers.page.html',
  styleUrls: ['./list-writers.page.scss'],
})
export class ListWritersPage implements OnInit {
  writers: any = [];


  constructor(
    private writerService: WriterService,
    private router: Router,
    public alertController: AlertController,
  ) {}



  ngOnInit() {
    this.getallWriters();
  }

  ionViewDidEnter(){
    this.getallWriters();
  }

  getallWriters() {
    this.writerService.getWriters().subscribe((response) => {
      this.writers = response;
    });
  }


  async deleteWriter(id) {
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      subHeader: 'El escritor con id:' + id + ' será eliminado',
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
            this.writerService.deleteWriter(id).subscribe(() => {
              console.log('Escritor con id:' + id + ' borrado');
              this.ionViewDidEnter();
            });
          },
        },
      ],
    });
    await alert.present();

  }

  updateWriters(id) {
    this.router.navigateByUrl(`/update-writers/${id}`);
  }

}
