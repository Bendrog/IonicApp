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
  Newcows: Cow[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.troupeau=this.navParams.data;
    this.cows=this.troupeau.cows;
    this.Newcows=this.troupeau.cows;
}


  applyFilter(filterValue: string){
    this.cows=[];

    for (var i =0; i<=this.Newcows.length-1; i++){
      if (this.Newcows[i].name.toLowerCase().includes(filterValue.toLowerCase())){
         this.cows.push(this.Newcows[i]);
         console.log("On va la gagner, N'golo Kanté");
      }
     
}
}

order(){
  console.log('done');
  if(this.toggleValue){
      for (var i=0; i<=this.troupeau.cows.length-1; i++){
        if (!this.troupeau.cows[i].vigilence[0]){
          this.cows.push(this.troupeau.cows[i]);
        }else{
          this.cows=this.troupeau.cows;
       }
      }
    }else{
      this.cows=this.troupeau.cows;
    }
    console.log('done');
}
 

}
