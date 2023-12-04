import { Component, OnInit } from '@angular/core';
import { AutobahnService } from './autobahn.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  autobahnData: any;
  
  constructor(private autobahnService: AutobahnService) {}

  ngOnInit() {
    this.getAutobahnData();
  }

  getAutobahnData() {
    this.autobahnService.getAutobahnData().subscribe((data) => {
      this.autobahnData = data;

    });
  }
   
  }

