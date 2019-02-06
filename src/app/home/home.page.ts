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

    this.hotel.leeHoteles().then((querySnapshot) => {
      this.listadoHotel = [];
      querySnapshot.forEach((doc) => {
        this.listadoHotel.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelHotel = this.listadoHotel;
      this.loadingController.dismiss();
    });

    this.moneda.leeMoneda().then((querySnapshot) => {
      this.listadoMoneda = [];
      querySnapshot.forEach((doc) => {
        this.listadoMoneda.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelMoneda = this.listadoMoneda;
      this.loadingController.dismiss();
    });

    this.avion.leeAvion().then((querySnapshot) => {
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

  actualizarPage() {

    this.hotel.leeHoteles().then((querySnapshot) => {
      this.listadoHotel = [];
      querySnapshot.forEach((doc) => {
        this.listadoHotel.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelHotel = this.listadoHotel;
      this.loadingController.dismiss();
    });


    this.moneda.leeMoneda().then((querySnapshot) => {
      this.listadoMoneda = [];
      querySnapshot.forEach((doc) => {
        this.listadoMoneda.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelMoneda = this.listadoMoneda;
      this.loadingController.dismiss();
    });

    this.avion.leeAvion().then((querySnapshot) => {
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




}
