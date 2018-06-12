import { Component, OnInit } from '@angular/core';
import { StoresService } from '../services/stores.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  iconNameSearch: String;

  constructor(private stote: StoresService) {}

  searchTextByName(searchStr: String) {
    setTimeout(() => { this.stote.search(searchStr);
    }, 200);
  }
  clear () {
    this.iconNameSearch = null;
    setTimeout(() => {
      this.stote.search('');
    }, 200);

  }
  ngOnInit() {
  }

}
