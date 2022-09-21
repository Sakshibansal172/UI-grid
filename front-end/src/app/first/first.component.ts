import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  weekflag: boolean = false;
  yearflag: boolean = false;
  dailyflag: boolean = false;
  constructor() {}
  imageURLs = [
    'assets/graphs/A.png',
    'assets/graphs/B.png',
    'assets/graphs/C.png',
  ];
  imageSource: string = '';
  ngOnInit(): void {}
  daily() {
    this.yearflag = false;
    this.weekflag = false;
    this.dailyflag = true;
  }
  weekly() {
    this.dailyflag = false;
    this.yearflag = false;
    this.weekflag = true;
  }

  yearly() {
    this.dailyflag = false;
    this.weekflag = false;
    this.yearflag = true;
  }
}
