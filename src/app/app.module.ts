import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WinePairingsComponent } from './wine-pairings/wine-pairings.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PairingsService} from './Services/pairings.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WinePairingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [PairingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
