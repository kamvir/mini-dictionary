import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  languages = [
    {key: 'en',	value: 'English'},
    {key: 'fr',	value: 'French'}
  ];
  removeSlash = /\//g;
  wordDetails: any;
  constructor() { }

  isArray(value) {
    return Array.isArray(value);
  }
}
