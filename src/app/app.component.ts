import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


  toggleSidenav() {
    this.opened = !this.opened;
  }
}
