import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { StoresService } from '../services/stores.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  copyText = null;
  isShowButton: Boolean = false;

  constructor(public snackBar: MatSnackBar, private store: StoresService) { }

  notify(message, action) {
    const snackBarRef = this.snackBar.open('Copied:' + message, action, {
      duration: 80000,
    });
    snackBarRef.onAction().subscribe(() => {
      this.isShowButton = false;
      this.store.emitText('remove');
    });

  }
  showAlert() {
    let el = document.createElement('textarea');
    let str = `<mat-icon svgIcon="${this.copyText }" size="24" color="gray"></mat-icon>`;
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.notify(str, 'Close');

  }
  ngOnInit() {
    this.store.copyText.subscribe( str => {
      if (str) {
        this.copyText = str;
        this.isShowButton = true;
      }
    });
  }

}
