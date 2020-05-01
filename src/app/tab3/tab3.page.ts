import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Todo } from '../model/todo';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  todos: Todo[] = [];

  todosScearched: Todo[] = [];

  search: string;

// @ViewChild('mylist')mylist:List;
  constructor(private todoService: TodoService, private platform : Platform) {}

  ngOnInit(){
    this.platform.ready().then(()=>{
      this.loadTodos();
    })
  }

  loadTodos(){
    this.todoService.getTodos().then(todos=>{
      this.todos = todos;
      this.todosScearched=todos;
    })
  }

  scearchItem(){
    this.todosScearched = [];
    this.todos.forEach(todo => {
      if (todo.name.includes(this.search)){
        this.todosScearched.push(todo);
      }
    });
  }

}
