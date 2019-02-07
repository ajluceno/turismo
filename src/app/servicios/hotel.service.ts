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
      return this.miHotel.ref.orderBy('destino').startAt(destino).get();


   }
   else {
     return this.miHotel.ref.get();
      } 
  }


  
}
