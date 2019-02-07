import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  miHotel: any;

  constructor(private fireStore: AngularFirestore) {
    this.miHotel = fireStore.collection<any>(environment.firebaseConfig.moneda)
  }

  leeMoneda(destino :String) {
    if (destino!==""){
      return this.miHotel.ref.orderBy('destino').startAt(destino).get();


   }
   else {
     return this.miHotel.ref.get();
      } 
    }
}
