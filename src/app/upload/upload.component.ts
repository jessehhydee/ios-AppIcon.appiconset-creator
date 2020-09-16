import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from "@angular/router";

import { CreateZipService } from '../create-zip.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(public router: Router, public createZip: CreateZipService) {}

  error: string;
  loading: boolean = false;
  dragAreaClass: string;

  //ON COMPONENT INITALISATION

  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  

  //DEALING WITH DRAG AND DROP PROCESS

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    console.log("DragOver");
    event.preventDefault();
  }

  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    console.log("DragEnter");
    event.preventDefault();
  }

  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    console.log("DragEnd");
    event.preventDefault();
  }

  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    console.log("DragLeave");
    event.preventDefault();
  }

  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    console.log("Drop");
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }


  //DEALING WITH FILE UPLOAD AND STORAGE

  saveFiles(files: FileList) {

    if (files[0].type != "image/png") {
      this.error = "File must be PNG";
    }

    if (files[0].type == "image/png") {
      
      this.createZip.pullImageFile(files[0]);

      this.loading = true;
      this.error = "";

      // setTimeout(() => {
      //   this.generateDownloadButton();
      // }, 4000);

    }

  }

}
