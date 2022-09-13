import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  title = 'todo-app';

  opened = false;

  // todos: Todo[] = [
  //   new Todo(Guid.create(), 'Learn Angular', false),
  //   new Todo(Guid.create(), 'Learn Typescript', false),
  // ]
  //
  // onSubmit(form: NgForm) {
  //   let todo = new Todo(Guid.create(), form.value.title, false);
  //   this.todos = [...this.todos, todo];
  //   form.reset();
  // }
  //
  // onComplete(id: Guid) {
  //   let todo = this.todos.filter(todo => todo.id === id)[0];
  //   todo.isComplete = true;
  // }
  //
  // onDelete(id: Guid) {
  //   this.todos = this.todos.filter(todo => todo.id !== id);
  // }

  goToCompleted() {
    this.router.navigate(['completed']);
  }

  goToDeleted() {
    this.router.navigate(['deleted']);
  }

  goToIndex() {
    this.router.navigate(['']);
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }
}
