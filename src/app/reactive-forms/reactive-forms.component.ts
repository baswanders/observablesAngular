import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl('');
  changesHistory: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(
      data => {
        console.log( typeof data, data);
        this.changesHistory.push(data);
      },
      error => { console.log('Error: ', error); },
      () => { console.log('Completed'); }
    );
  }


}
