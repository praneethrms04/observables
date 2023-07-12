import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Observable, Subscription, filter, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  ss: Subscription | undefined;

  ngOnInit(): void {
    const data = ajax('https://fakestoreapi.com/products');
    const sub = new Subject();
    sub.subscribe((data) => console.log(data));
    sub.subscribe((data) => console.log(data));
    const res = data.subscribe(sub);
  }

  ngOnDestroy(): void {
    this.ss?.unsubscribe();
  }
}
