import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  databaseUrl:string ='http://localhost:3005/products'; 
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.databaseUrl);
  }

  getProductByID(id:any){
    return this.http.get(`${this.databaseUrl}/${id}`)
  }

  addProduct(product:any){
    return this.http.post(this.databaseUrl,product);
  }

  updateProduct(id:any,product:any){
    return this.http.put(`${this.databaseUrl}/${id}`,product);
  }

  delete(id:any){
    return this.http.delete(`${this.databaseUrl}/${id}`);
  }
}
