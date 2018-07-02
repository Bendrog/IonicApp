import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import {Troupeau} from '../../interface/Troupeaux';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
private baseUrl: string = "../../assets/api/troupeaux.json";

  troupeaux: Troupeau[];

  constructor(
    public readonly http: HttpClient,
    private readonly platform: Platform) {
    console.log('Hello RestProvider Provider');
     if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "../../../www/assets/api/troupeaux.json";
    }
  }

  getTroupeaux(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
