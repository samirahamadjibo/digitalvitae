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
      sectionsColor: ['black', 'black', '#141414'],
      anchors:['1srt', '2nd'],
      scrollHorizontally: true,
      navigation: false,
      navigationPosition: 'left',
    });
  }
}

