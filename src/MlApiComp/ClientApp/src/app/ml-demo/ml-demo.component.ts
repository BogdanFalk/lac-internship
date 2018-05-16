import { Component, OnInit } from '@angular/core';
//import { read } from 'fs';
import { MlService } from '../services/ml.service';


@Component({
  selector: 'app-ml-demo',
  templateUrl: './ml-demo.component.html',
  styleUrls: ['./ml-demo.component.scss']
})
export class MlDemoComponent implements OnInit {

  status: string;
  image: string;
  image1: string;
  image2: string;
  selectedFile: Blob;
  selectedFile1: Blob;
  selectedFile2: Blob;

  googleResponseFile: string;
  googleResponseFile1: string;
  googleResponseFile2: string;

  azureResponseFile: string;
  azureResponseFile1: string;
  azureResponseFile2: string;

  demoList: string[];

  constructor(private service: MlService) {
    this.status = "Not selected";

    this.demoList = new Array<string>();

    this.demoList = new Array<string>();


    
  }


  ngOnInit() {
  }

  onFileSelected($event) {
    this.selectedFile = $event.target.files[0];
  //  this.selectedFile1 = $event.target.files[1];
 //   this.selectedFile2 = $event.target.files[2];
    this.demoList.push("Size File 1:"+this.selectedFile.size.toString());

 //   this.demoList.push("Size File 2:" +this.selectedFile1.size.toString());

 //   this.demoList.push("Size File 3:" +this.selectedFile2.size.toString());

    var reader = new FileReader();

    reader.onload = (e) => {
      this.status = "File Selected";
      this.image = reader.result;
    };

    reader.readAsDataURL($event.target.files[0]);

    this.selectedFile1 = $event.target.files[1];
    this.demoList.push("Size File 2:" + this.selectedFile1.size.toString());

    var reader1 = new FileReader();
    reader1.onload = (e) => {
      this.image1 = reader1.result;
    };

    reader1.readAsDataURL($event.target.files[1]);


    this.selectedFile2 = $event.target.files[2];
    this.demoList.push("Size File 3:" + this.selectedFile2.size.toString());

    var reader2 = new FileReader();
    reader2.onload = (e) => {
      this.image2 = reader2.result;
    };

    reader2.readAsDataURL($event.target.files[2]);

  }

  onCallApi() {
    this.service.predictGoogle(this.selectedFile)
      .subscribe(response => this.googleResponseFile = response);

    this.service.predictGoogle(this.selectedFile1)
      .subscribe(response => this.googleResponseFile1 = response);

    this.service.predictGoogle(this.selectedFile2)
      .subscribe(response => this.googleResponseFile2 = response);

    this.service.predictAzure(this.selectedFile)
      .subscribe(response => this.azureResponseFile = response);

    this.service.predictAzure(this.selectedFile1)
      .subscribe(response => this.azureResponseFile1 = response);

    this.service.predictAzure(this.selectedFile2)
      .subscribe(response => this.azureResponseFile2 = response);
  }
}
