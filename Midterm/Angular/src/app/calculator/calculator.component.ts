import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalculatorModel } from '../models/CalculatorModel';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CalculatorForm = new FormGroup({
    operator: new FormControl(''),
    operand1: new FormControl(''),
    operand2: new FormControl('')
  })

  Calculate(FormData: any){
    console.log(FormData.operand1);
    console.log(FormData.operand2);
    console.log(FormData.operator);
    this.calculation.Operator = FormData.operator;
    this.calculation.Operand1 = FormData.operand1;
    this.calculation.Operand2 = FormData.operand2;

    var result = 0;
    switch (this.calculation.Operator) {
      case "+":
        result = parseInt(this.calculation.Operand1) + parseInt(this.calculation.Operand2)
        break;
      case "-":
        result = parseInt(this.calculation.Operand1) - parseInt(this.calculation.Operand2)
        break;
      case "*":
        result = parseInt(this.calculation.Operand1) * parseInt(this.calculation.Operand2)
        break;
      case "/":
        result = parseInt(this.calculation.Operand1) / parseInt(this.calculation.Operand2)
        break;
      default:
        break;
    }

    this.calculation.result = result;
    console.log(result);

  }

  calculation = new CalculatorModel('','','',0);

}
