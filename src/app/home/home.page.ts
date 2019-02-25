import { Component,  ViewChild} from '@angular/core';
import { IonSlides, IonInfiniteScroll, LoadingController, ModalController } from '@ionic/angular';
import { HotelService } from '../servicios/hotel.service';
import { MonedaService } from '../servicios/moneda.service';
import { AvionService } from '../servicios/avion.service';
import { ResumenPage } from '../resumen/resumen.page';
import { Router } from '@angular/router';
import { InfoVuelosPage } from '../info-vuelos/info-vuelos.page';
import { InfoHotelesPage } from '../info-hoteles/info-hoteles.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;

  //"selectTab(3)"

  SwipedTabsIndicator: any = null;
  tabs = ["selectTab(0)", "selectTab(1)", "selectTab(2)"];
  public category: any = "0";
  ntabs = 3;
  timestampsInSnapshots: true;
  listadovuelos = [];
  listadoPanelVuelos=[];
  destino: string ="";
  listadoHotel = [];
  listadoPanelHotel=[];

  listadoMoneda = [];
  listadoPanelMoneda=[];
  constructor(
    private hotel:HotelService,
    private loadingController: LoadingController,
    private moneda :MonedaService,
    private avion:AvionService,
    private router: Router,
    private modalContoller:ModalController
  
    ) {
      this.initializeItems();

  }
 
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");

    this.hotel.leeHoteles(this.destino).then((querySnapshot) => {
      this.listadoHotel = [];
      querySnapshot.forEach((doc) => {
        this.listadoHotel.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelHotel = this.listadoHotel;
      this.loadingController.dismiss();
    });

    this.moneda.leeMoneda(this.destino).then((querySnapshot) => {
      this.listadoMoneda = [];
      querySnapshot.forEach((doc) => {
        this.listadoMoneda.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelMoneda = this.listadoMoneda;
      this.loadingController.dismiss();
    });

    this.avion.leeAvion(this.destino).then((querySnapshot) => {
      this.listadovuelos = [];
      querySnapshot.forEach((doc) => {
        this.listadovuelos.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelVuelos = this.listadovuelos;
      this.loadingController.dismiss();
    });
}
initializeItems(){
  this.listadoPanelHotel=this.listadoHotel;
}
/**
   * Loading
   * @param msg 
   */
  async presentLoading(msg) {
    let myloading = await this.loadingController.create({
      message: msg
    });
    return await myloading.present();
  }
  /**
   * Función para llamar a filtrar, igualamos el destino con lo que se ha escrito, y actualizamos la pagina con ese destino.
   * @param busqueda 
   */
    filtrar(busqueda){
      this.destino = busqueda.srcElement.value.toLowerCase();
      console.log(this.destino);
      this.actualizarPage(this.destino);
    }

   /**
   * Actualizamos la página
   * @param destino 
   */ 
  
  actualizarPage(destino: string) {

    this.hotel.leeHoteles(destino).then((querySnapshot) => {
      this.listadoHotel = [];
      querySnapshot.forEach((doc) => {
        this.listadoHotel.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelHotel = this.listadoHotel;
      this.loadingController.dismiss();
    });


    this.moneda.leeMoneda(destino).then((querySnapshot) => {
      this.listadoMoneda = [];
      querySnapshot.forEach((doc) => {
        this.listadoMoneda.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelMoneda = this.listadoMoneda;
      this.loadingController.dismiss();
    });

    this.avion.leeAvion(destino).then((querySnapshot) => {
      this.listadovuelos = [];
      querySnapshot.forEach((doc) => {
        this.listadovuelos.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelVuelos = this.listadovuelos;
      this.loadingController.dismiss();
    });


  }

/**
   * Actualizamos la categoria
   * @param destino 
   */

updateCat(cat: Promise<any>) {
  cat.then(dat => {
    this.category = dat;
    this.category = +this.category; //to int;
  });
}
/**
   * Actualizamos la posición donde nos encontramos 
   */
updateIndicatorPosition() {
  this.SwipedTabsSlider.getActiveIndex().then(i => {
    if (this.ntabs > i) {  // this condition is to avoid passing to incorrect index
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
    }
  });
}

animateIndicator(e) {
  //console.log(e.target.swiper.progress);
  if (this.SwipedTabsIndicator)
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
      ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
    }


/**
   * definimos modal
   * @param id
   * @param moneda
   * @param foto
   * @param texto
   * @param simbolo
   * @param valorEuro
   */

    async presentModal(id: any, moneda: any, foto: any, texto: any, simbolo: any, valorEuro: any) {
      const modal = await this.modalContoller.create({
        component: ResumenPage,
   
        componentProps: { id: id, moneda: moneda, foto: foto, texto: texto, simbolo: simbolo, valorEuro: valorEuro }
      });
      return await modal.present();
    }
/**
   * Abrimos el modal (otra página) con los parametros que hemos puesto
   * @param id
   * @param moneda
   * @param foto
   * @param texto
   * @param simbolo
   * @param valorEuro
   */

  
    modal(id, moneda, foto, texto, simbolo, valorEuro) {
      this.presentModal(id, moneda, foto, texto, simbolo, valorEuro)
    }

/**
   * definimos modal
   * @param id
   * @param foto
   * @param texto
   * @param aerolinea
   * @param origen
   * @param precio
   */

    async presentModalVuelos(id: any, foto: any, texto: any, aerolinea: any, origen: any, precio: any) {
      const modal = await this.modalContoller.create({
        component: InfoVuelosPage,
   
        componentProps: { id: id, aerolinea: aerolinea, foto: foto, texto: texto, origen: origen, precio: precio }
      });
      return await modal.present();
    }

/**
   * Abrimos el modal (otra página) con los parametros que hemos puesto
   * @param id
   * @param aerolinea
   * @param foto
   * @param texto
   * @param origen
   * @param precio
   */
  
    modalVuelos(id, aerolinea, foto, texto, origen, precio) {
      this.presentModalVuelos(id, aerolinea, foto, texto, origen, precio)
    }

/**
   * definimos modal
   * @param id
   * @param foto
   * @param texto
   * @param nombre
   * @param puntuacion
   */
    async presentModalHoteles(id: any, foto: any, texto: any, nombre: any, puntuacion: any) {
      const modal = await this.modalContoller.create({
        component: InfoHotelesPage,
   
        componentProps: { id: id, nombre: nombre, foto: foto, texto: texto, puntuacion: puntuacion }
      });
      return await modal.present();
    }

/**
   * Abrimos el modal (otra página) con los parametros que hemos puesto
   * @param id
   * @param nombre
   * @param foto
   * @param texto
   * @param puntuacion
   */
  
    modalHoteles(id, nombre, foto, texto, puntuacion) {
      this.presentModalHoteles(id, nombre, foto, texto, puntuacion)
    }

/**
   * Actualizamos con los datos actuales de la base de datos
   * @param refresher
   */

doRefresh(refresher) {
  this.avion.leeAvion(this.destino)
    .then(querySnapshot => {
      this.listadovuelos = [];
      querySnapshot.forEach((doc) => {
        this.listadovuelos.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelVuelos = this.listadovuelos;
      //llamamos al metodo initializeItem para que recargue 
      //el arraylist con los elementos a buscar
      this.initializeItems();
      refresher.target.complete();
    });
    
    this.hotel.leeHoteles(this.destino)
    .then(querySnapshot => {
      this.listadoHotel = [];
      querySnapshot.forEach((doc) => {
        this.listadoHotel.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelHotel = this.listadoHotel;
      //llamamos al metodo initializeItem para que recargue 
      //el arraylist con los elementos a buscar
      this.initializeItems();
      refresher.target.complete();
    });
    this.moneda.leeMoneda(this.destino)
    .then(querySnapshot => {
      this.listadoMoneda = [];
      querySnapshot.forEach((doc) => {
        this.listadoMoneda.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelMoneda = this.listadoMoneda;
      //llamamos al metodo initializeItem para que recargue 
      //el arraylist con los elementos a buscar
      this.initializeItems();
      refresher.target.complete();
    });
}


}
