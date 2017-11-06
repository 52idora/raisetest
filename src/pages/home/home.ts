import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any = JSON.parse(sessionStorage.getItem('CUR_USER'));

  constructor(public navCtrl: NavController) {

  }

}

