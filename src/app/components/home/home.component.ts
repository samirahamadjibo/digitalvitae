import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: any;
  fullpage_api: any;

  ngOnInit(): void {}

  constructor() {

    // for more details on config options please visit fullPage.js docs

     /*
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      menu: '#menu',

      // sections colors
      sectionsColor: ['black', 'grey', '#4B492E', '#41343B', '#ADD8E6'],

      // scolling options
      loopBottom: true,
      navigation:true,
      navigationPosition: 'left',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };*/
  
}
}

  /*
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
  */

