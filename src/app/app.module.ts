import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeDownloaderComponent } from './components/youtube-downloader/youtube-downloader.component';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeDownloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule,
    HttpClientModule,

  ],
  providers: [
    TabsetConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
