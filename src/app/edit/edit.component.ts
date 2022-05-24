import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:any;
  product_id: string;
  
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService,
  ) { }
  
  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      this.product_id = params['id'];
      console.log(this.product_id);
    });
    this.getOneProduct(this.product_id);
  }
  
  getOneProduct(id){
    this._httpService.getOneProduct(id)
      .subscribe(data=>{
        console.log(data);
        this.product = data;
      });
    }

    updateProduct(){
      this._httpService.updateProduct(this.product)
      .subscribe(data=>{
        this._router.navigate(['/products', this.product_id]);
    })
  }
}