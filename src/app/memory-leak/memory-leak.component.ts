import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.scss']
})
export class MemoryLeakComponent implements OnInit {
  secondsCounter$ = interval(1000);
  secondsCounter = 0;

  constructor() { }

  ngOnInit(): void {
    // Subscribe to begin publishing values
    this.secondsCounter$.subscribe(data => {
      this.secondsCounter = data;
      console.log(`It's been ${data} seconds since subscribing!`);
    });
  }

}
