import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public firstName = "mehsin";
  public title = "pipe video in my youtube channel";

  public student = {
    "fullName" : "mehsin husseiny",
    "school" : "school Name"
  }
  public myDate = new Date ();


  constructor() { }

  ngOnInit(): void {
  }

}
