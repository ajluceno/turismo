import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  miAvion: any;

  constructor(private fireStore: AngularFirestore) {
    this.miAvion = fireStore.collection<any>(environment.firebaseConfig.vuelos)
  }

  leeAvion() {
    return this.miAvion.ref.get();
  }

}
