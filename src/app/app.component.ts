import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TemaService } from './servicios/tema.service';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { CustomToastModule } from './customModules/custom-toast/custom-toast.module';
import { NetworkService } from './servicios/network.service';
import { Network } from '@ionic-native/network/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent 
{
  skinmenu: any;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sobre nosotros',
      url: '/list',
      icon: 'people'
    },
    {
      title: 'Contacto',
      url: '/contacto',
      icon: 'mail'
    }
  ];

  constructor(
    private themeS: TemaService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: NetworkService,
    private toast: CustomToastModule,
    private screenOrientation: ScreenOrientation,
   private translate: TranslateService,
   
  ) {
    this.initializeApp();
  }

/**
   * Inicializamos el lenguaje por defecto y el que usamos
   */

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('es');
      this.translate.use('es');
   
    });
  }
  /**
   * Cambiamos de tema a dark o light
   * @param e
   */
  cambiarTema(e) {
    if (e.detail.checked) { 
      this.themeS.setTheme("dark");
    } else {
      this.themeS.setTheme("light");
    }
}
/**
   * Pasamos el evento para cambiar el idioma 
   * @param $event
   */
changeLang($event) {
 this.translate.use($event.target.value);
 console.log($event.target.value);
 
}   

}

