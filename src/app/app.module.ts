import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { InfoVuelosPage } from './info-vuelos/info-vuelos.page';
import { ResumenPage } from './resumen/resumen.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { InfoHotelesPage } from './info-hoteles/info-hoteles.page';
import { CustomToastModule } from './customModules/custom-toast/custom-toast.module';
import { NetworkService } from './servicios/network.service';
import { Network } from '@ionic-native/network/ngx';
 
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent,InfoVuelosPage,ResumenPage,InfoHotelesPage],
  entryComponents: [AppComponent,InfoVuelosPage,ResumenPage,InfoHotelesPage],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    ScreenOrientation,
    SplashScreen,
    CustomToastModule,
    Network,  
    NetworkService ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
