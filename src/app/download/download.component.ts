import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Router } from "@angular/router";

import { CreateZipService } from '../create-zip.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(public router: Router, public createZip: CreateZipService) { }

  zipFile: any;

  ngOnInit(): void {
    this.zipFile = this.createZip.pushGeneratedZip();
  }

  downloadZip() {

    this.zipFile.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "compressed.zip");
    });

  }

}
