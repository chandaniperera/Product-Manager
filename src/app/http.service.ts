import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    
  getAllProducts(){
    return this._http.get("/products");
  }

  getOneProduct(id:string){
    return this._http.get("/products/"+id);
  }

  addProduct(newProduct){
    console.log("IN SERVICE")
    return this._http.post('/products', newProduct);
  }

  updateProduct(product){
    return this._http.put('/api/product/' + product._id, product);
  }

  deleteProduct(id:string){
    console.log(id)
    return this._http.delete(`/products/destroy/${id}`);
  }
}

