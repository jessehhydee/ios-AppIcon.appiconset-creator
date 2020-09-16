import { Injectable } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CreateZipService {

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

  constructor(private ng2ImgMax: Ng2ImgMaxService, public router: Router) { }

  pullImageFile(image: any) {

    this.uploadedImage = image;
    this.generateZip();

  }

  pushGeneratedZip() {

    return this.zipFile;

  }

  generateZip() {

    for (let i = 0; i < this.imageDimensions.length; i++) {

      this.ng2ImgMax.resizeImage(this.uploadedImage, this.imageDimensions[i].width, this.imageDimensions[i].height).subscribe(
        result => {
  
          this.generatedImages[i] = {"fileName": this.imageDimensions[i].name, "url": result};
  
        },
        error => {
          console.log('Oh no!', error);
        }
      );

    }

    setTimeout(() => {

      for (let i = 0; i < this.imageDimensions.length; i++) {

        this.rootFolder.file(this.generatedImages[i].fileName, this.generatedImages[i].url);
  
      }
  
      this.rootFolder.file("Contents.json", 
        '{"images":[{"size":"60x60","expected-size":"180","filename":"180.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"3x"},{"size":"40x40","expected-size":"80","filename":"80.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"2x"},{"size":"40x40","expected-size":"120","filename":"120.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"3x"},{"size":"60x60","expected-size":"120","filename":"120.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"2x"},{"size":"57x57","expected-size":"57","filename":"57.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"1x"},{"size":"29x29","expected-size":"58","filename":"58.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"2x"},{"size":"29x29","expected-size":"29","filename":"29.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"1x"},{"size":"29x29","expected-size":"87","filename":"87.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"3x"},{"size":"57x57","expected-size":"114","filename":"114.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"2x"},{"size":"20x20","expected-size":"40","filename":"40.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"2x"},{"size":"20x20","expected-size":"60","filename":"60.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"iphone","scale":"3x"},{"size":"1024x1024","filename":"1024.png","expected-size":"1024","idiom":"ios-marketing","folder":"Assets.xcassets/AppIcon.appiconset/","scale":"1x"},{"size":"40x40","expected-size":"80","filename":"80.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"},{"size":"72x72","expected-size":"72","filename":"72.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"1x"},{"size":"76x76","expected-size":"152","filename":"152.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"},{"size":"50x50","expected-size":"100","filename":"100.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"},{"size":"29x29","expected-size":"58","filename":"58.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"},{"size":"76x76","expected-size":"76","filename":"76.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"1x"},{"size":"29x29","expected-size":"29","filename":"29.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"1x"},{"size":"50x50","expected-size":"50","filename":"50.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"1x"},{"size":"72x72","expected-size":"144","filename":"144.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"},{"size":"40x40","expected-size":"40","filename":"40.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"1x"},{"size":"83.5x83.5","expected-size":"167","filename":"167.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"},{"size":"20x20","expected-size":"20","filename":"20.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"1x"},{"size":"20x20","expected-size":"40","filename":"40.png","folder":"Assets.xcassets/AppIcon.appiconset/","idiom":"ipad","scale":"2x"}]}'
      );
  
      setTimeout(() => {
        this.router.navigate(["download"]);
      }, 2000);
      
    }, 2500);

  }

}
