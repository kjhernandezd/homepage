import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { HeadComponent } from './head/head.component';
import { SliderComponent } from './slider/slider.component';
import { GridComponent } from './grid/grid.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HomePageComponent, HeadComponent, SliderComponent, GridComponent, FooterComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
]

})
export class HomePageModule { }
