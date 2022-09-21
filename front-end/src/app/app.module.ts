import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { GraphComponent } from './graph/graph.component';
import { CardsComponent } from './cards/cards.component';
import { FaultGraphComponent } from './fault-graph/fault-graph.component';
import { DxChartModule } from 'devextreme-angular';
import { WeekGraphComponent } from './week-graph/week-graph.component';
import { YearGraphComponent } from './year-graph/year-graph.component';
import { AnamolyGraphComponent } from './anamoly-graph/anamoly-graph.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FirstComponent,
    GraphComponent,

    CardsComponent,
    FaultGraphComponent,
    WeekGraphComponent,
    YearGraphComponent,
    AnamolyGraphComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DxChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
