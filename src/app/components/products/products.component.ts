import { Component, OnInit } from '@angular/core';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  table = [] as any;
  public qrcodetext: string;
  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.getProduct();
  }

getProduct(){
this.table= this.productService.productTable;
 console.log("my product" , this.table);
}

}
