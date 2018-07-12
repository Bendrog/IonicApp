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
/**
 * Generated class for the TroupeauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TroupeauPage = /** @class */ (function () {
    function TroupeauPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toggleValue = true;
        this.cows = new Array();
    }
    TroupeauPage.prototype.ionViewDidLoad = function () {
        this.troupeau = this.navParams.data;
        this.cows = this.troupeau.cows;
    };
    TroupeauPage.prototype.click = function () {
        if (this.toggleValue) {
            for (var i = 0; i <= this.troupeau.cows.length - 1; i++) {
                if (!this.troupeau.cows[i].vigilence[0]) {
                    this.cows.push(this.troupeau.cows[i]);
                }
                else {
                    this.cows = this.troupeau.cows;
                }
            }
        }
        else {
            this.cows = this.troupeau.cows;
        }
    };
    TroupeauPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-troupeau',
            templateUrl: 'troupeau.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TroupeauPage);
    return TroupeauPage;
}());
export { TroupeauPage };
//# sourceMappingURL=troupeau.js.map