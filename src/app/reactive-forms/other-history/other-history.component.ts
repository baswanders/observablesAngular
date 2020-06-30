import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-history',
  templateUrl: './other-history.component.html',
  styleUrls: ['./other-history.component.scss']
})
export class OtherHistoryComponent implements OnInit {
@Input() changesHistory: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
