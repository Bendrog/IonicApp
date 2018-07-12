var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TroupeauPage } from '../troupeau/troupeau';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the SearchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchingPage = /** @class */ (function () {
    /* Test sur le fonctionnement des listes en ts*/
    function SearchingPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.troupeaux = new Array();
        /* Test sur le fonctionnement des listes en ts*/
        this.tab = ['Lait', 'LP', 'MP'];
        this.tab2 = [];
        this.var1 = this.tab[1];
        this.var2 = this.tab2.length;
    }
    SearchingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.restProvider.getTroupeaux().subscribe(function (data) {
            _this.troupeaux = data;
            console.log("Data: ==>" + data);
        });
    };
    SearchingPage.prototype.ToTroupeau = function (troupeau) {
        this.navCtrl.push(TroupeauPage, troupeau);
    };
    SearchingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-searching',
            templateUrl: 'searching.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            RestProvider])
    ], SearchingPage);
    return SearchingPage;
}());
export { SearchingPage };
//# sourceMappingURL=searching.js.map