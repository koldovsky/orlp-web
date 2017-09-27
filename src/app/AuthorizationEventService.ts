import {EventEmitter} from '@angular/core';

export class AuthorizationEventService{

  isAuthorizedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  emitIsAuthorizedChangeEvent(boolean) {
    this.isAuthorizedChange.emit(boolean);
  }

  getIsAuthorizedChangeEmitter() {
    return this.isAuthorizedChange;
  }
}
