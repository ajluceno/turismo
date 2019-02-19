import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage {

  constructor(
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    ) {
     
      
     }
}