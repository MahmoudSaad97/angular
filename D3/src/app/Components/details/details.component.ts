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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    let currentproduct = productlist.find(product => product.id == this.productId);
    this.productName = currentproduct?.name;
    this.productPrice = currentproduct?.price;
    this.productImage = currentproduct?.image;
  }

  backToHome() {
    this.router.navigate(['/product']);
  }
}
