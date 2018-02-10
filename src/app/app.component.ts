import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yes or Not?';
  response;
  question;
  loadingGif = './assets/transparent.gif';

  constructor(private http: HttpClient) {
    this.question = '';
  }

  getAnswer() {
    this.response = null;
    if ( this.question && this.question.length > 3 ) {
      this.loadingGif = './assets/loading.gif';
      this.http.get('https://yesno.wtf/api').subscribe((response) => this.response = response);
    } else {
      this.loadingGif = './assets/transparent.gif';
    }
  }
}
