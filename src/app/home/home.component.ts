import { Component, OnInit } from '@angular/core';
import { svgIcons } from '../angular2-material-icons/svgIcons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  svgIcons = svgIcons;
  config = {
    color: 'gray' ,
    size : '50'
  };

  icons = Object.keys(svgIcons);
  constructor() { }

  ngOnInit() {
    console.log(Object.keys(svgIcons));
  }

}
