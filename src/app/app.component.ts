import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyD-ucwyrO4IcHBpwed9llCn0DWx-k7Fh7c",
      authDomain: "ng-recipe-book-backend-5d76c.firebaseapp.com"
    };
    firebase.initializeApp(config);

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
