import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-info-hoteles',
  templateUrl: './info-hoteles.page.html',
  styleUrls: ['./info-hoteles.page.scss'],
})
export class InfoHotelesPage implements OnInit {

  id:any;
  nombre:any;
  foto:any;
  texto: any;
  puntuacion:any;
  
 

  constructor(
    private modalController:ModalController,
    public navparams:NavParams
  ) {
    this.id=this.navparams.get('id');
    this.nombre=this.navparams.get('nombre');
    this.foto=this.navparams.get('foto');
    this.texto=this.navparams.get('texto');
    this.puntuacion=this.navparams.get('puntuacion');

   }

  ngOnInit() {
  }
  volverAtras(){this.modalController.dismiss(); }

}
