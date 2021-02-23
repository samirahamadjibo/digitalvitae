import { Component, OnInit } from '@angular/core';

declare let fullpage: any;

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new fullpage('#fullpage', {
      autoScrolling:true,
      sectionsColor: ['black', 'black', 'black'],
      scrollHorizontally: true,
      navigation: false,
      verticalCentered: false,
    });
  }

}
