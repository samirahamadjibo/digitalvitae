import { Component, OnInit } from '@angular/core';
declare let fullpage: any;

@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.scss']
})
export class FullpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new fullpage('#fullpage', {
      autoScrolling:true,
      sectionsColor: ['black', '#E0E0E0'],
      loopHorizontal: false,
    });
  }

  

}
