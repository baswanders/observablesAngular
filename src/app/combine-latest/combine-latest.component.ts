import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, combineLatest, of, Subject, Subscription } from 'rxjs';
import { Todo } from '../models/todo';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { debounceTime, debounce, map, takeUntil } from 'rxjs/operators';
import { TodoVM } from '../models/todoVM';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, OnDestroy {
  todos$: Observable<Todo[]>;
  users$: Observable<User[]>;
  todosVM: TodoVM[] = [];
  todoSubscribtion: Subscription;
  todosVM$: Observable<TodoVM[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    // we use combineLatest rxjs operator to combine 2 observables
    // the code inside subscribe only runs when the two observables are returning data
    // So, in case one observable takes longer to emit data, it will wait for it.
    // If possible use the second example which returns an observable.
    this.todoSubscribtion = combineLatest([this.todos$, this.users$]).subscribe(
      ([todos, users]) => {
        todos.forEach(todo => {
          const newTodo: TodoVM = {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            username: users.find(u => u.id === todo.userId).name || 'unknown user'
          };
          this.todosVM.push(newTodo);
        });
      }
    );

    // General prefered version
    // this returns a observable, which is even more powerfull
    // you can show the results directly in the html template with the | async pipe.
    // no need for subscribe/unsubscribe
    this.todosVM$ = combineLatest([this.todos$, this.users$]).pipe(
        map(([todos, users]) => {
          const newTodos: TodoVM[] = [];
          todos.forEach(todo => {
            const newTodo: TodoVM = {
              id: todo.id,
              title: todo.title,
              completed: todo.completed,
              username: users.find(u => u.id === todo.userId).name || 'unknown user'
            };
            newTodos.push(newTodo);
          });
          return newTodos;
        })
    );
  }

  ngOnDestroy(): void {
    this.todoSubscribtion.unsubscribe();
  }

}
