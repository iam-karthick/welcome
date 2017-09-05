import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { route } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SkilsComponent } from './skils/skils.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MainComponent,
    HomeComponent,
    SkilsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
