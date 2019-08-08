import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-ewe',
  templateUrl: './hello-ewe.component.html',
  styleUrls: ['./hello-ewe.component.css']
})
export class HelloEweComponent implements OnInit {

  name = "Matt";

  constructor() { }

  ngOnInit() {
  }

}
