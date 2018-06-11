import { Component, OnInit } from '@angular/core';
import { svgIcons } from '../angular2-material-icons/svgIcons';
import { StoresService } from '../services/stores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  svgIcons = svgIcons;
  icons = Object.keys(svgIcons);
  isActiveItem: String = null;
  searchByIconName: String;
  config = {
    color: 'gray' ,
    size : '50'
  };

  constructor(private store: StoresService ) { }
  activeItem (icon, index) {
    this.isActiveItem = icon;
  }

  copyText (icon) {
    this.store.copy(icon);
  }
  ngOnInit() {
    this.store.searchText.subscribe(str => {
      this.searchByIconName = str ? str : '' ;
    });
    this.store.sendtext.subscribe(str =>  this.isActiveItem = null );
  }

}
