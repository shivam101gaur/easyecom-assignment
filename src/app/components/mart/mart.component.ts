import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mart',
  templateUrl: './mart.component.html',
  styleUrls: ['./mart.component.css']
})
export class MartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //❌❌ sample item , remove this from your code
  sampleitem = {
    id: 1,
    name: "banana",
    price:25
  }

  moveToCart(){
    //how will you move the item to cart
  }

}
