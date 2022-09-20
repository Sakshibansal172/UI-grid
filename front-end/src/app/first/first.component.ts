import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  imageURLs = ['assets/graphs/A.png','assets/graphs/B.png','assets/graphs/C.png'];
  imageSource:string = '';
  ngOnInit(): void {
  }

}
