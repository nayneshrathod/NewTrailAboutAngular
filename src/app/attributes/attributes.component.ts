import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  RBG: boolean;
  myred: boolean;
  myblue: boolean;
  mygreen: boolean;
  constructor() { }

  ngOnInit(): void {
    this.RBG = true;
    this.myblue = false;
    this.myred = false;
    this.mygreen = false;
  }
  toggle(event:Event){
    this.RBG = true;
    this.myblue = !this.myblue;
    this.myred = !this.myred;
    this.mygreen = !this.mygreen;

  }


}
