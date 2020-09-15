import { Injectable } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class CreateImagesService {

  uploadedImage: any;
  imageDimensions: {name: string, width: number, height: number}[] = [
    {"name": "20.png", "width": 20, "height": 20},
    {"name": "29.png", "width": 29, "height": 29},
    {"name": "40.png", "width": 40, "height": 40},
    {"name": "50.png", "width": 50, "height": 50},
    {"name": "57.png", "width": 57, "height": 57},
    {"name": "58.png", "width": 58, "height": 58},
    {"name": "68.png", "width": 60, "height": 60},
    {"name": "72.png", "width": 72, "height": 72},
    {"name": "76.png", "width": 76, "height": 76},
    {"name": "80.png", "width": 80, "height": 80},
    {"name": "87.png", "width": 87, "height": 87},
    {"name": "100.png", "width": 100, "height": 100},
    {"name": "114.png", "width": 114, "height": 114},
    {"name": "120.png", "width": 120, "height": 120},
    {"name": "114.png", "width": 144, "height": 144},
    {"name": "152.png", "width": 152, "height": 152},
    {"name": "167.png", "width": 167, "height": 167},
    {"name": "180.png", "width": 180, "height": 180},
    {"name": "1024.png", "width": 1024, "height": 1024}
  ];
  generatedImages: {fileName: string, url: string}[] = [];
  zipFile: JSZip = new JSZip();
  rootFolder = this.zipFile.folder("AppIcon.appiconset");

  constructor(private ng2ImgMax: Ng2ImgMaxService) { }

  pullImageFile(image: any) {

    this.uploadedImage = image;
    this.generateImage();

  }

  pushGeneratedImages() {

    //return this.generatedImages;
    return this.zipFile;

  }

  generateImage() {

    for (let i = 0; i < this.imageDimensions.length; i++) {

      this.ng2ImgMax.resizeImage(this.uploadedImage, this.imageDimensions[i].width, this.imageDimensions[i].height).subscribe(
        result => {
  
          const objectURL = URL.createObjectURL(result);
          this.generatedImages[i] = {"fileName": this.imageDimensions[i].name, "url": objectURL};
  
        },
        error => {
          console.log('Oh no!', error);
        }
      );

    }

    for (let i = 0; i < this.imageDimensions.length; i++) {

      this.rootFolder.file(this.generatedImages[i].fileName, this.generatedImages[i].url);

    }

    this.zipFile.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "compressed.zip");
    });

    console.log(this.generatedImages);

  }

}
