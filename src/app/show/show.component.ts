
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product:any;
  product_id:string;
  
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
    
  deleteProduct(id){
    this._httpService.deleteProduct(id)
    .subscribe(data=>{
      this._router.navigate(['/']);
    })
  }
}