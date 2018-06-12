import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-color-menu',
  templateUrl: './color-menu.component.html',
  styleUrls: ['./color-menu.component.scss']
})
export class ColorMenuComponent implements OnInit {
  colors = [ '#673ab7', '#3f51b5', '#e91e63', '#ff5d5d' ];

  updateColor(color) {
    this.store.emitText( color );
  }
  constructor(private store: StoresService ) { }

  ngOnInit() {
  }

}
