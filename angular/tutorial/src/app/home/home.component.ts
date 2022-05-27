import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  @Input() user:string ='';

  @ViewChild('tool') toolElement!: ElementRef; 

  lista: string[]=["primo","secondo","terzo","quarto"];

  today!: Date;

  money: number = 0;
  
  show: boolean= true;

  constructor() { 
    console.log("Costruttore");
    let money1 = 23;
    let money2 = 54;
    this.money=this.sum(money1,money2);
  }

  ngOnInit(): void {
    this.today= new Date();
    console.log("On Init, date:"+this.today);
  }

  sum(n1 :number, n2: number) :number {
    return n1+n2;
  }

  showHidden() :void{
    this.show = !this.show;
  }

  printElement() :void{
    console.log(this.toolElement.nativeElement);
  }

  hello(field: HTMLSelectElement){
    if(field.value == '1'){
      alert("Ciao!");
    }
    else{
      console.log("Ciao!");
    }
  }

  ngAfterViewInit() :void{
    document.getElementById("btn")!.style.backgroundColor="red";
  }

}
