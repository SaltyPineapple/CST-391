import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  quantity = 0
  products = []
  selectedProduct = ""

  newInfo() {

  }

  onSubmit() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
