import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('fadedIn', style({
        opacity: 1
      })),
      state('fadedOut', style({
        opacity: 0
      })),
      transition('fadedIn <=> fadedOut', [
        animate('250ms ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(
  ) { }
  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])

  toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened;
  }

}
