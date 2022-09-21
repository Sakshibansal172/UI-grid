import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-fault-graph',
  templateUrl: './fault-graph.component.html',
  styleUrls: ['./fault-graph.component.css']
})
export class FaultGraphComponent implements OnInit {

  constructor() { }
  totalflag:boolean = false;
  activeflag:boolean = false;
  ngOnInit(): void {
  }
  total(){
    this.activeflag = false;
    this.totalflag = true;
  }
  active(){
    this.activeflag = true;
    this.totalflag = false;
  }

}
