import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  id:any;
  moneda:any;
  foto: any;
  texto: any;
  simbolo:any;
  valorEuro:any;

  constructor(
    private modalController:ModalController,
    public navparams:NavParams
  ) {
    this.id=this.navparams.get('id');
    this.moneda=this.navparams.get('moneda');
    this.foto=this.navparams.get('foto');
    this.texto=this.navparams.get('texto');
    this.simbolo=this.navparams.get('simbolo');
    this.valorEuro=this.navparams.get('valorEuro');
   }

  ngOnInit() {
  }
  volverAtras(){this.modalController.dismiss(); }

}
