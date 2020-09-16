import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2ImgMaxModule } from 'ng2-img-max';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2ImgMaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
