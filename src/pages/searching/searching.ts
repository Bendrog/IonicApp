

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Troupeau} from '../../interface/Troupeaux';
import {TroupeauPage} from '../troupeau/troupeau';
import {RestProvider} from '../../providers/rest/rest';

/**
 * Generated class for the SearchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searching',
  templateUrl: 'searching.html',
})
export class SearchingPage {
	troupeaux = new Array<Troupeau>();

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private restProvider: RestProvider
  	) {}
  
  ionViewDidLoad() {
  	this.restProvider.getTroupeaux().subscribe(data => {
  		this.troupeaux = data;
      console.log("Data: ==>"+data);
  	});
    }

  ToTroupeau(troupeau: Troupeau){
  	  this.navCtrl.push(TroupeauPage, troupeau);
  }

}
