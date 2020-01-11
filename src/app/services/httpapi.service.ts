import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpapiService {

  constructor(private http: HttpClient) { }

  getApi(reqParams: any, apiname: string) {
    let url = '';

    url = environment.url + apiname;

    if (reqParams === '') {
      console.log('Request url :: ', + url);
      return this.http.get(url).pipe(
        map(data => {
          return data;
        })
      );
    } else {
      const param1 = new URLSearchParams();
      let params2: HttpParams = new HttpParams();

      // tslint:disable-next-line: forin
      for (const key in reqParams) {
        params2 = params2.append(key, reqParams[key]);
      }
      console.log('Request url :: ' + url + '?' + params2.toString());

      return this.http.get(url, {params: params2}).pipe(
        map(data => {
          return data;
        })
      );
    }

  }
}
