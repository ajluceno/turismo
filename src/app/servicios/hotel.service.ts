import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  miHotel: any;

  constructor(private fireStore: AngularFirestore) {
    this.miHotel = fireStore.collection<any>(environment.firebaseConfig.hoteles)
  }

  leeHoteles(destino: string) {
    if (destino!==""){
      
      //compara letra por letra con los datos destino de la base de datos y los que introducimos en el ion-search

      var strlength = destino.length;
      var strFrontCode = destino.slice(0, strlength-1);
      var strEndCode = destino.slice(strlength-1, destino.length);
      var startcode = destino;

     var endcode= strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
      return this.miHotel.ref.where('destino','>=',startcode).where('destino','<',endcode).get();


   }
   else  {

     //si no hemos introducido ningun destino nos muestra todos los campos de nuestra base de datos
     return this.miHotel.ref.get();
      } 
}
  
}
