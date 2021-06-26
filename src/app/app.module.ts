import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NemzaComponent } from './nemza/nemza.component';
import { SukiComponent } from './suki/suki.component';
import { SnortijaComponent } from './snortija/snortija.component';
import { NemzaDirective } from './directives/nemza/nemza.directive';
import { SukiDirective } from './directives/suki/suki.directive';
import { SnortijaDirective } from './directives/snortija/snortija.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NemzaComponent,
    SukiComponent,
    SnortijaComponent,
    NemzaDirective,
    SukiDirective,
    SnortijaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
