import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


declare let fullpage: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger("fadeInOut", [
      state("fadedIn", style({
        opacity: 1
      })),
      state("fadedOut", style({
        opacity: 0
      })),
      transition("fadedIn <=> fadedOut", [
        animate('250ms 250ms ease-in')
      ])
    ]),

    trigger("showHide", [
      state("shown", style({
       /* position: 'relative',
        overflow: 'hidden',
        top: '0px'
        */
       opacity: 1
      })),
      state("hidden", style({
        /*
        position: 'relative',
        overflow: 'hidden',
        top: '200px'
        */
       opacity: 0
      })),
      transition("shown <=> hidden",[
        animate('250ms ease-in')
      ])
    ]),

    trigger("fadeIn", [
      state("fadedIn", style({
        opacity: 1
      })),
      state("hidden", style({
        opacity: 0
      })),
      transition("hidden => fadedIn", [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public activeSlideIndex: Number;
  constructor() {}

  
  ngOnInit(): void { 
    this.activeSlideIndex = 0;
    document.getElementById("slideMoveCallback").addEventListener('keydown', (ev) => {this.activeSlideIndex = Number.parseInt(ev.key); console.log("activeSlideIndex: " + ev.key)});
    this.initFullpage();
  }

  initFullpage(){
    new fullpage('#fullpage', {
      autoScrolling:true,
      sectionsColor: ['black', 'black', 'black'],
      scrollHorizontally: true,
      navigation: false,
      
      afterSlideLoad: function(section:any, origin: any, destination: any, direction: any){
        if(section.index == 0) document.getElementById("slideMoveCallback").dispatchEvent(new KeyboardEvent('keydown', {key:destination.index}));
      },
    });
  }

  
}

