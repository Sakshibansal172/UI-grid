import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { GraphComponent } from './graph/graph.component';
import { ContentComponent } from './content/content.component';
import { CardsComponent } from './cards/cards.component';
import { FaultGraphComponent } from './fault-graph/fault-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,

    FirstComponent,
      GraphComponent,
      ContentComponent,
      CardsComponent,
      FaultGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
