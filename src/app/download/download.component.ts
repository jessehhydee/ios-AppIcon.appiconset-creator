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

  //DECLARING LOCAL VARIABLES 

  zipFile: any;

  //ON COMPONENT INITALISATION
  //PULLING THE GENERATED ZIP TO OUR LOCAL VARIABLE

  ngOnInit(): void {

    this.zipFile = this.createZip.pushGeneratedZip();

  }

  //ALLOWING THE ZIP TO BE DOWNLOADED

  downloadZip() {

    this.zipFile.generateAsync({type:"blob"})
    .then(function(content) {

        saveAs(content, "compressed.zip");
        
    });

  }

}
