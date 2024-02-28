import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
firstName ="mehsin";
  active= true;

datalist= [
  {name: "mehsin" , code: 961 , country: "lebanon"},
  {name: "fatima" , code: 701 , country: "brazil"},
  {name: "ali" , code: 902 , country: "europe"}
]

name="mousa";
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

goToUser() {
  this.route.navigate(["/user"])
}

}
