
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cow} from '../../models/cow';
import {Troupeau} from '../../models/troupeau';
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

	allcows: Cow[] = [
  	{
  		id:"1",
  		age: "9ans et 4 mois",
  		name:"Bellissima",
  		code_race:123,
  		date_de_terme:"90 jours",
  		sexee_femelle:false,
  		croisement:false,
  		reforme:false,
  	},
  	{
  		id:"564",
  		age: "1ans et 4 mois",
  		name:"Wallida",
  		code_race:845,
  		date_de_terme:"12 jours",
  		sexee_femelle:false,
  		croisement:false,
  		reforme:false,
  	},
  	{
  		id:"62454",
  		age: "6ans et 2 mois",
  		name:"grosse truie",
  		code_race:6485,
  		date_de_terme:"64 jours",
  		sexee_femelle:false,
  		croisement:false,
  		reforme:false,
  	}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.troupeau=this.navParams.data;
  }

}
