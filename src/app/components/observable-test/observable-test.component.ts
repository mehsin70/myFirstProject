import { Component, OnInit } from '@angular/core';
import {Observable, observable } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  second :number;
  constructor() { }

  ngOnInit(): void {
const observable = interval(1000);
    const counter = observable;
    counter.subscribe (
      (value :number) => {
       this.second = value;
    
      }
      )
  }

}
