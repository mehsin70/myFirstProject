import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productService } from '../components/services/product.service';
import { UserService } from '../components/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name= "mehsin";
  location= "lebanon";
  status= "active";
  tableData: any[];
  message= "";
  public userlist: any["https://jsonplaceholder.typicode.com/users"];

  constructor(
              private route : Router ,
              private productService :productService,
              private userService : UserService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getUser();

  }

  
getProduct(){

  this.tableData= this.productService.productTable;
}


  getstatus(){
    return this.status;
  }

  getmessage(){
    console.log("my new message");
  }

  gotoRegister() {
  this.route.navigate(["/register"])
}  

 getUser() {
  this.userService.getUserFromPlaceholder().subscribe(
    result => {
      this.userlist = result;
      console.log(result);
    },
    error => {
      console.error(error);
    }
  );
}
}