import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-graph',
  templateUrl: './week-graph.component.html',
  styleUrls: ['./week-graph.component.css']
})
export class WeekGraphComponent implements OnInit {
  customizeText(arg:any) {
    return `${arg.valueText}`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
