import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  searchSubject = new BehaviorSubject(null);
  searchText = this.searchSubject.asObservable();

  copySubject = new BehaviorSubject(null);
  copyText = this.copySubject.asObservable();

  textEmit = new BehaviorSubject(null);
  sendtext = this.textEmit.asObservable();

  emitText (text) {
    this.textEmit.next(text);
  }
  search (data) {
      this.searchSubject.next(data);
  }
  copy (data) {
    this.copySubject.next(data);
  }
  constructor() { }
}
