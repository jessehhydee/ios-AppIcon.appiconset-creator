import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [
  { path: "", redirectTo: "/upload", pathMatch: "full" },
  { path: "upload", component: UploadComponent },
  { path: "download", component: DownloadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
