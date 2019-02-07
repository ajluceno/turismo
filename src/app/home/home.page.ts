import { Component,  ViewChild} from '@angular/core';
import { IonSlides, IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { VuelosService } from '../servicios/vuelos.service';
import { HotelService } from '../servicios/hotel.service';
import { MonedaService } from '../servicios/moneda.service';
import { AvionService } from '../servicios/avion.service';


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
    private avion:AvionService
  // private vuelos: VuelosService
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
  async presentLoading(msg) {
    let myloading = await this.loadingController.create({
      message: msg
    });
    return await myloading.present();
  }
    filtrar(busqueda){
      this.destino = busqueda.srcElement.value.toLowerCase();
      console.log(this.destino);
      this.actualizarPage(this.destino);
    }

   
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



updateCat(cat: Promise<any>) {
  cat.then(dat => {
    this.category = dat;
    this.category = +this.category; //to int;
  });
}

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
