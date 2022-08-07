import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  question = "Whats your name"
  answer = "unknown"

  appForm = new FormGroup({
    answer: new FormControl(''),
  })

  onSubmit(data: any){
    this.answer= data.answer;
    console.log("Your name is " + this.answer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
