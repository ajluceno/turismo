import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TemaService } from './servicios/tema.service';
//import {environment} from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
//import { NgSelectOption } from '@angular/forms';
//import { SelectorContext } from '@angular/compiler';
//import { SelectInterface } from '@ionic/core';




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
    }
  ];

  constructor(
    private themeS: TemaService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
   private translate: TranslateService,
   //private langModel: any
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('es');
      this.translate.use('es');
   
    });
  }
  cambiarTema(e) {
    if (e.detail.checked) { 
      this.themeS.setTheme("dark");
    } else {
      this.themeS.setTheme("light");
    }
}
changeLang($event) {
  //console.log(this.langModel);
 this.translate.use($event.target.value);
 console.log($event.target.value);
 
}   
}
