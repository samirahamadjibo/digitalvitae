import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {HomeComponent} from './home.component'
import {MainComponent} from '../home/sections/main/main.component'
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { ProjectsComponent } from './sections/projects/projects.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        HomeComponent,
        MainComponent,
        ProjectsComponent,
        LayoutComponent
    ],
  imports: [
    BrowserModule,
    AngularFullpageModule 
  ],
  exports: [HomeComponent, MainComponent, ProjectsComponent, LayoutComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class HomeModule { }
