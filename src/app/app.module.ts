import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import * as d3 from 'd3';
import {
  HttpClientModule
} from '@angular/common/http';

import {
  AppComponent
} from './app.component';
import {
  ChartBarComponent
} from './chart-bar/chart-bar.component';
import {
  ChartTrendComponent
} from './chart-trend/chart-trend.component';
import {
  ChartLineComponent
} from './chart-line/chart-line.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartDonutComponent } from './chart-donut/chart-donut.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { ChartScatterplotComponent } from './chart-scatterplot/chart-scatterplot.component';
import { SectionTableComponent } from './section-table/section-table.component';



@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent,
    ChartTrendComponent,
    ChartLineComponent,
    ChartPieComponent,
    ChartDonutComponent,
    WorldMapComponent,
    ChartScatterplotComponent,
    SectionTableComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}