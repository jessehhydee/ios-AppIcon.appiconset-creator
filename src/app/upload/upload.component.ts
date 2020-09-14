import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  error: string;
  dragAreaClass: string;
  imgDisplayAreaClass: string;
  imgURL: any;
  
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }

  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

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

  saveFiles(files: FileList) {

    if (files.length > 1) {
      this.error = "Only one file at time allow";
    }

    if (files[0].type != "image/png") {
      this.error = "File must be PNG";
    }

    if (files[0].type == "image/png") {

      this.imgDisplayAreaClass = "imgDisplayArea";
      
      var reader = new FileReader();

      reader.readAsDataURL(files[0]); 

      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }

    }

  }


}
