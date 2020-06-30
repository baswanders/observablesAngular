import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map-observable',
  templateUrl: './map-observable.component.html',
  styleUrls: ['./map-observable.component.scss']
})
export class MapObservableComponent implements OnInit {
  todosSummary$: Observable<string[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getToDos(): void {
    const todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    const flatTodos$ = todos$.pipe(
      // with tap we can check the current contents of the stream
      // it will return the original observable.
      tap(data => console.log('data before: ', data)),
      // Observable.map is used to change the contents of the stream. The new content
      // is returned as a Observable.
      // In this example, we only return the completed todo's
      map(data => data.filter(value => value.completed === true)),
      tap(data => console.log('data after filter completed: ', data)),
      // In this example, the second map is the map of array.map, because the content is an array.
      map(data => data.map(value => value.title + ' - ' + (value.completed ? 'completed' : 'not done').toUpperCase() ) ),
      tap(data => console.log('data after conversion: ', data)),
    );
    this.todosSummary$ = flatTodos$;
  }

}
