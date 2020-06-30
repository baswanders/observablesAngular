import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-takeone',
  templateUrl: './takeone.component.html',
  styleUrls: ['./takeone.component.scss']
})
export class TakeoneComponent implements OnInit {
  todoSubscription: Subscription;
  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    this.todoSubscription = todos$.pipe(
      take(1),
      ).subscribe ( data => {
        this.todos = data;
      });
  }



}
