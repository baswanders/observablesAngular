import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  secondsCounter$ = interval(1000);
  mouseMove$ = fromEvent(document, 'mousemove');
  mouseMove: MouseEvent;
  secondsCounter = 0;
  // We use this subject to send a "next" when the components destroys.
  private readonly onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    // We added the takeUntil in the .pipe operator
    // it will unsubscribe the moment the variable onDestroy emits a value
    // this is done in the OnDestroy event.
    this.secondsCounter$.pipe(
      takeUntil(this.onDestroy)
      ).subscribe(data => {
        this.secondsCounter = data;
        console.log(`It's been ${data} seconds since subscribing!`);
    });

    this.mouseMove$.pipe(
      takeUntil(this.onDestroy)
      ).subscribe((data: MouseEvent) => {
        this.mouseMove = data;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

}
