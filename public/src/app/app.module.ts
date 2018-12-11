import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CakeService } from './cake.service'

import { HttpClientModule } from'@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ViewCakeComponent } from './view-cake/view-cake.component';
import { SpotCakeComponent } from './spot-cake/spot-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCakeComponent,
    SpotCakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
