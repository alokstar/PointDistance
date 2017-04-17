import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {error} from "selenium-webdriver";

@Injectable()

export class AppService{
  constructor(private http:Http){}

  getdata() {
    return this.http.get('app/coordinates.json')
      // .map((res:Response)=>{
      //   res.json();
      // })
      .map(res=>res.json())
      .catch((error:any)=>Observable.throw(error.json().error))
  }


}
