
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
  Newtroupeaux = new Array<Troupeau>();

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private restProvider: RestProvider
  	) {}
  
  ionViewDidLoad() {
  	this.restProvider.getTroupeaux().subscribe(data => {
  		this.troupeaux = data;
      this.Newtroupeaux = data;
      console.log("Data: ==>"+data);
  	});
    }

  applyFilter(filterValue: string){
    this.troupeaux=[];

    for (var i =0; i<=this.Newtroupeaux.length-1; i++){
      if (this.Newtroupeaux[i].city.toLowerCase().includes(filterValue.toLowerCase()) || 
        this.Newtroupeaux[i].etab.toLowerCase().includes(filterValue.toLowerCase()) || 
        this.Newtroupeaux[i].EDE.toString().includes(filterValue)){
         this.troupeaux.push(this.Newtroupeaux[i]);
         console.log("On va la gagner, N'golo Kanté");
      }
     
}
}
  ToTroupeau(troupeau: Troupeau){
  	  this.navCtrl.push(TroupeauPage, troupeau);
  }

}
