import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchingPage} from '../searching/searching';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ToSearching(){
  this.navCtrl.push(SearchingPage);
  }

}
