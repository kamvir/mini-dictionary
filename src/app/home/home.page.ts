import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { WordsApiService } from '../services/words-api.service';
import { WordsService } from '../services/words.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private wordsApi: WordsApiService,
    public wordsService: WordsService,
    private router: Router
    ) {}
  results: any;
  selectedLanguage: string;
  textInput: string;
  isSubmitted = false;
  isLoading = false;
  ionViewWillEnter() { }

  onSubmit(textInput, selectedLanguage) {
    this.isSubmitted = true;
    this.isLoading = true;
    console.log({textInput}, {selectedLanguage});
    const reqObj = {
      define: textInput,
      lang: selectedLanguage
    };
    this.results = [];
    this.wordsApi.getMeaning(reqObj).subscribe(data => {
      this.isLoading = false;
      this.results = data;
      console.log('data :: ', data);
    },
    error => {
      this.isLoading = false;
      this.results = [];
      console.log('service error', error.message);
    }
    );
  }

  onInputText() {
    this.results = [];
    this.isSubmitted = false;
  }

  gotoWordDetails(result: any) {
    console.log(JSON.stringify(result));
    this.wordsService.wordDetails = '';
    this.wordsService.wordDetails = result;
    this.router.navigateByUrl('/word-details');
  }
}
