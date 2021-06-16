import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  show:BehaviorSubject<boolean>;

  constructor() {
    this.show = new BehaviorSubject(false);
   }

  showSpinner() {
    this.show.next(true);
  }

  hideSpinner() {
    this.show.next(false);
  }

  initialize() {
    this.show = new BehaviorSubject(false);
  }

}
