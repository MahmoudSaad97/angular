import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productlist } from 'src/app/models/productlist';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;
  constructor(private ProductService:ProductService){
  }
  ngOnInit(): void {
    this.ProductService.getAll().subscribe({
      next:(res)=>{
        this.products = res;
      }
    });
  }
  deleteProduct(id:any){
    if(confirm("Are you want to delete This Product")){
      console.log(id);
      this.ProductService.delete(id).subscribe();
      this.products = this.products.filter(
        (product: any) => product.id != id
      );
    }
  }
} 
