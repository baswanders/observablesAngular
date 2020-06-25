import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-unsubscribe',
  templateUrl: './reactive-forms-unsubscribe.component.html',
  styleUrls: ['./reactive-forms-unsubscribe.component.scss']
})
export class ReactiveFormsUnsubscribeComponent implements OnInit, OnDestroy {
  name = new FormControl('');
  changesHistory: string[] = [];
  nameSubscribtion: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscribeToValueChanges();
  }

  subscribeToValueChanges() {
    this.nameSubscribtion = this.name.valueChanges.subscribe(
      data => {
        console.log( typeof data, data);
        this.changesHistory.push(data);
      },
      error => { console.log('Error: ', error); },
      () => { console.log('Completed'); }
    );
  }

  unsubscribeFromValueChanges() {
    this.nameSubscribtion.unsubscribe();
  }

  ngOnDestroy() {
    if (!this.nameSubscribtion.closed) {
      this.nameSubscribtion.unsubscribe();
    }
  }



}
