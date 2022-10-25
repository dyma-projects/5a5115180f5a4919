import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public pText: string = 'Hello World with interpolation';
  public inputValue: string = 'Hello World with property binding';
  constructor() { }

  ngOnInit(): void {
  }

  direHello(): void {
    alert('Hello World with event binding');
  }

}
