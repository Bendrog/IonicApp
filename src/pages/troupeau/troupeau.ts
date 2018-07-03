
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Troupeau} from '../../interface/troupeaux';
import {Cow} from '../../interface/cow';
/**
 * Generated class for the TroupeauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-troupeau',
  templateUrl: 'troupeau.html',
})
export class TroupeauPage {
	toggleValue: boolean=false;
  troupeau: Troupeau;
  cows: Cow[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.troupeau=this.navParams.data;
    this.cows=this.troupeau.cows;
  }

}
