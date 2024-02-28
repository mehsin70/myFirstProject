import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lebanon =false;
  brazil= false;
    algeria= true;

    ChangeCountry()
    {
      this.lebanon= true;
      this.algeria= false;
      this.brazil= false;
    }

}
