import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectService } from '../subject.service';
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  asyncScheduler,
  concatMap,
  filter,
  from,
  interval,
  map,
  of,
  range,
  take,
  timer,
} from 'rxjs';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  constructor(private notificationservice: SubjectService) {}
  ngOnInit(): void {
    const arr = [1, 2, 3];
    from(arr)
      .pipe(filter((res) => res % 2 == 0))
      .subscribe((result) => console.log(result));
  }
  ngOnDestroy(): void {}
}
