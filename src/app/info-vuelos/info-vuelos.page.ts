import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-info-vuelos',
  templateUrl: './info-vuelos.page.html',
  styleUrls: ['./info-vuelos.page.scss'],
})
export class InfoVuelosPage implements OnInit {

  id:any;
  aerolinea:any;
  foto:any;
  texto: any;
  origen:any;
  precio:any;


  constructor(
    private modalController:ModalController,
    public navparams:NavParams
  ) {
    this.id=this.navparams.get('id');
    this.aerolinea=this.navparams.get('aerolinea');
    this.foto=this.navparams.get('foto');
    this.texto=this.navparams.get('texto');
    this.origen=this.navparams.get('origen');
    this.precio=this.navparams.get('precio');
   }

  ngOnInit() {
  }
  volverAtras(){this.modalController.dismiss(); }

}
