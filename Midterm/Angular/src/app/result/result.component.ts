import { Component, Input, OnInit } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() result = 0;

}
