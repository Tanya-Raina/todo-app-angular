import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo.model";
import {Guid} from "guid-typescript";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos: Todo[] = [
    new Todo(Guid.create(), 'Learn Angular', false),
    new Todo(Guid.create(), 'Learn Typescript', false),
  ]

  onSubmit(form: NgForm) {
    let todo = new Todo(Guid.create(), form.value.title, false);
    this.todos = [...this.todos, todo];
    form.reset();
  }

  onComplete(id: Guid) {
    let todo = this.todos.filter(todo => todo.id === id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
