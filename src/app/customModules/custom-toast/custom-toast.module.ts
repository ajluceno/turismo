import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastController } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomToastModule {
  toast;
  constructor(private toastCtrl: ToastController) { }
/**
   * nos muestra el mensaje de internet y sus propiedades como el boton, la duracion...
   * @param msg 
   */
  async show(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Ok',
      duration: 5000
    });
    toast.present();
  }
/**
   * nos muestra la barra arriba 
   * @param msg 
   * @param time
   */
  async showTop(msg, time?) {
    if (this.toast)
      this.toast.dismiss();
    if (!time) {
      this.toast = await this.toastCtrl.create({
        message: msg,
        showCloseButton: true,
        position: 'top',
        closeButtonText: 'Ok',
      });
      this.toast.present();
    } else {
      this.toast = await this.toastCtrl.create({
        message: msg,
        showCloseButton: false,
        position: 'top',
        closeButtonText: 'Ok',
        duration: time
      });
      this.toast.present();
    }
  }
}
