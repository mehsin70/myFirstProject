import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productService {

  productTable = [

    {productName :"orange" , productPrice :20 , productQuantity : 5 },
    {productName :"pinAplle" , productPrice :10 , productQuantity : 3 },
    {productName :"fig" , productPrice :50 , productQuantity : 7 },
    {productName :"banana" , productPrice :40 , productQuantity : 10 },
  ]
    constructor() { }
}
