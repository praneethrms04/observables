import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // public notificationSubject = new Subject<string>();
  public notificationSubject = new BehaviorSubject<boolean>(false);

  // const bs = new BehaviorSubject(0)

  constructor() {}

  sendNotification(data: any) {
    this.notificationSubject.next(data);
  }
}
