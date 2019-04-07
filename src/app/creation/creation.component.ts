import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, range, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  exampleOf$: Observable<number[]> = of([0, 1, 2]);
  exampleOfFoo$: Observable<string> = of('foo');
  exampleInterval$: Observable<number> = interval(1000).pipe(take(5));
  exampleRange$: Observable<number> = range(0, 10);
  exampleTimer$: Observable<number> = timer(1000, 2000).pipe(take(10));

  constructor() { }

  ngOnInit() {
  }

}
