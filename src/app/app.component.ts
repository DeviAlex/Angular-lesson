import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public isLoaded = false;

  public array = ['sanya', 'h', 's'];

  constructor(
    // private route: Router
  ) {

  }

  getData() {
    this.isLoaded = true;
  }

  ngOnInit() {
    this.getData();
  }
}
