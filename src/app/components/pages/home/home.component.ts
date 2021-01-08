import { Component, OnInit } from '@angular/core';
declare let fullpage: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new fullpage('#fullpage', {
      autoScrolling:true,
      sectionsColor: ['black', 'black', '#E0E0E0'],
      scrollHorizontally: true,
      navigation: true,
      navigationPosition: 'left',
    });
  }

}
