import { ProductService } from './../../Services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { productlist } from 'src/app/models/productlist';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  productId: any;
  productName:any;
  productPrice:any;
  productImage:any;
  currentproduct:any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private ProductService:ProductService) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.ProductService.getProductByID(this.productId).subscribe({
      next:(res)=>{
      console.log(res);
      this.currentproduct = res;
      this.productName = this.currentproduct?.name;
      this.productPrice = this.currentproduct?.price;
      this.productImage = this.currentproduct?.image;
      }
    });
  }

  backToHome() {
    this.router.navigate(['/product']);
  }
}
