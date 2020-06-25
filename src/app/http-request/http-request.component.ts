import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent implements OnInit {
  todos$: Observable<Todo[]>;
  codeExampleText = `<div *ngFor="let todo of todos$ | async" class="todo"></div>`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getToDos(): void {
    this.todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
