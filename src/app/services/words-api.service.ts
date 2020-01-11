import { Injectable } from '@angular/core';
import { HttpapiService } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  constructor(private httpapi: HttpapiService) { }

  getMeaning(reqParams?: any) {
    return this.httpapi.getApi(reqParams, '');
  }
}
