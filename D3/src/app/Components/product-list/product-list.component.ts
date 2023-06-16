import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productlist } from 'src/app/models/productlist';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Iproduct[]=[];
  constructor(){
    this.products=productlist;
  }
} 
