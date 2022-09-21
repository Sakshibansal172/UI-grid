import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-graph',
  templateUrl: './year-graph.component.html',
  styleUrls: ['./year-graph.component.css'],
})
export class YearGraphComponent implements OnInit {
  customizeText(arg: any) {
    return `${arg.valueText}`;
  }
  constructor() {}

  ngOnInit(): void {}
}
