import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  miMoneda: any;

  constructor(private fireStore: AngularFirestore) {
    this.miMoneda = fireStore.collection<any>(environment.firebaseConfig.moneda)
  }

  leeMoneda(destino :String) {
    if (destino!==""){

      //compara letra por letra con los datos destino de la base de datos y los que introducimos en el ion-search
      var strlength = destino.length;
      var strFrontCode = destino.slice(0, strlength-1);
      var strEndCode = destino.slice(strlength-1, destino.length);
      var startcode = destino;
      var endcode= strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
      return this.miMoneda.ref.where('destino','>=',startcode).where('destino','<',endcode).get();


   }
   else  {

     //si no hemos introducido ningun destino nos muestra todos los campos de nuestra base de datos
     return this.miMoneda.ref.get();
      } 
    }
}
