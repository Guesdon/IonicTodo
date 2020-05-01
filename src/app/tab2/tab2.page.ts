import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  todos : Todo[] = [];
  newTodo: Todo = <Todo>{
    ended:false
  }

  constructor(private todoService: TodoService) {}

  addItem(){
    if (this.todos){
      if (this.todos.length>0){
        this.newTodo.id=this.todos[this.todos.length-1].id+1;
      }
    }
    this.todoService.addTodo(this.newTodo).then(item =>{
      this.newTodo = <Todo>{};
    })
  }

  // loadTodos(){
  //   this.todoService.getTodos().then(todos=>{
  //     this.todos = todos
  //   })
  // }

}
