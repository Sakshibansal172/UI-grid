import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamoly-graph',
  templateUrl: './anamoly-graph.component.html',
  styleUrls: ['./anamoly-graph.component.css'],
})
export class AnamolyGraphComponent implements OnInit {
  customizeText(arg: any) {
    return `${arg.valueText}`;
  }
  constructor() {}

  ngOnInit(): void {}
}
