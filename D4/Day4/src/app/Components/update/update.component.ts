import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:any;
  id:any;
constructor(private ProductService:ProductService,private router:Router,private activatedRoute:ActivatedRoute){
  
}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id !=0){
      this.ProductService.getProductByID(this.id).subscribe({
        next:(resp)=>{
          this.product=resp;
          this.getName.setValue(this.product.name);
          this.getPrice.setValue(this.product.price);
          this.getQuantity.setValue(this.product.quantity);
          this.getImage.setValue(this.product.image)
        }
      })
    }
  }
productform= new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(5)]),
  price:new FormControl("",[Validators.required,Validators.min(100)]),
  quantity: new FormControl("",[Validators.required,Validators.min(5)]),
  image:new FormControl("deafult.png"),
});
  get getPrice(){
    return this.productform.controls["price"];
  }
  get getName(){
    return this.productform.controls["name"];
  }
  get getQuantity(){
    return this.productform.controls["quantity"];
  }
  get getImage(){
    return this.productform.controls["image"];
  }

  formActivate(e:any){
    e.preventDefault();
    if(this.productform.status == "VALID"){
      if(this.id > 0 ){
        this.ProductService.updateProduct(this.id,this.productform.value).subscribe();
      }else{
        this.ProductService.addProduct(this.productform.value).subscribe();
      }
      this.router.navigate(['/product'])
    }
  }
}
