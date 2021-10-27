import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  //❌❌ sample item , remove this from your code
  sampleitem = {
    id: 1,
    name: "banana",
    price:25
  }

  removeFromCart(){
    //how will you move the item to cart
  }

}
