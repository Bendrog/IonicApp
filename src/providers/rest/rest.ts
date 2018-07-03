import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
// import {Troupeau} from '../../interface/Troupeaux';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
private baseUrl: string = "../../assets/api/troupeaux.json";


  constructor(
    private  http: HttpClient,
    private  platform: Platform
    ) {
      
    }
 
  getTroupeaux(): Observable<any>{
      console.log('hello world');

    return this.http.get(this.baseUrl);
  }

}
