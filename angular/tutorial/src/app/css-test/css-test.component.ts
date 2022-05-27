import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-test',
  templateUrl: './css-test.component.html',
  styleUrls: ['./css-test.component.css']
})
export class CssTestComponent implements OnInit {

  color: string ="black";
  size: string="none";

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(field: HTMLSelectElement){
    if(field.value == '1'){
      this.color="red";
    }
    else if(field.value == '2'){
      this.color="green";
    }
    else if(field.value == '3'){
      this.color="blue";
    }
    else{
      this.color="black";
    }
  }

  changeSize(field: HTMLSelectElement){
    if(field.value == '1'){
      this.size="big";
    }
    else if(field.value == '2'){
      this.size="small";
    }
  }

}
