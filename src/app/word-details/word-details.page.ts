import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.page.html',
  styleUrls: ['./word-details.page.scss'],
})
export class WordDetailsPage {
  keys = Object.keys(this.wordsService.wordDetails.meaning);
  constructor(
    public wordsService: WordsService
  ) { }

  ionViewWillEnter() {}
  }

