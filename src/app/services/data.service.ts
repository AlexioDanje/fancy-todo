import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }
  // tslint:disable-next-line:typedef
  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  // tslint:disable-next-line:typedef
  changeParam(param: any[]) {
    this.paramSource.next(param);
  }
  // tslint:disable-next-line:typedef
  changeP(param: any) {
    this.paramSource.next(param);
  }
}
