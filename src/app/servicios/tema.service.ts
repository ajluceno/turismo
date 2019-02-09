import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
 
interface Tema {
  name: string;
  styles: EstilosTema[];
}
 
interface EstilosTema {
  themeVariable: string;
  value: string;
}
 
@Injectable({
  providedIn: 'root'
})
/*Es el servicio que permite cambiar el tema de la aplicación, hay que realizar 
un estudio de las variables que se necesitan tocar */
export class TemaService {
 
  private themes: Tema[] = [];
  private currentTheme: number = 0;
 
  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
 
    this.themes = [
      {
        name: 'light',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#222020'},
          { themeVariable: '--ion-item-color', value: '#000'},
          { themeVariable: '--ion-color-text', value: '#000'},
          { themeVariable: '--ion-background-color', value: '#ffffff'},
          { themeVariable: '--ion-header-color', value: '#ffffff'},
          { themeVariable: '--ion-card-text', value: '#222020'},
          { themeVariable: '--ion-title-text', value: '#ffffff'},
          { themeVariable: '--ion-fondo-refresher', value: '#ffffff'}
        ]
      },
      {

        name: 'dark',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#000'},
          { themeVariable: '--ion-item-color', value: '#FFF'},
          { themeVariable: '--ion-color-text', value: '#FFF'},
          { themeVariable: '--ion-background-color', value: '#383838'},
          { themeVariable: '--ion-header-color', value: '#383838'},
          { themeVariable: '--ion-card-text', value: '#a2a4ab'},
          { themeVariable: '--ion-title-text', value: '#f4f5f8cc'},
          { themeVariable: '--ion-fondo-refresher', value: '#6b6565'}

         

          
         
        ]
      }
    ]
 
  }
 
  cycleTheme(): void {
 
    if (this.currentTheme == 0){
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }
      this.setTheme(this.themes[this.currentTheme].name);
  }
 
  setTheme(name): void {
 
      let theme = this.themes.find(theme => theme.name === name);
      this.domCtrl.write(() => {
      theme.styles.forEach(style => {
      document.documentElement.style.setProperty(style.themeVariable, style.value);
      });
 
    });
 
  }
 
}
