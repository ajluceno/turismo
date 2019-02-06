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

  leeHoteles() {
    return this.miHotel.ref.get();
  }


  
}
