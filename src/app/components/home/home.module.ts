import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {HomeComponent} from './home.component'
import {MainComponent} from '../home/sections/main/main.component'
import { ProjectsComponent } from './sections/projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        MainComponent,
        ProjectsComponent,
        LayoutComponent,
        FullpageComponent,
        FooterComponent
    ],
  imports: [
    BrowserModule,

  ],
  exports: [HomeComponent, MainComponent, ProjectsComponent, LayoutComponent, FullpageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class HomeModule { }
