import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Todo } from '../model/todo';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  todos: Todo[] = [];
  // newTodo: Todo = <Todo>{
  //   id: 0,
  //   name:"new",
  //   ended:false
  // }
// @ViewChild('mylist')mylist:List;
  constructor(private todoService: TodoService, private platform : Platform) {
  }

  ngOnInit(){
    this.platform.ready().then(()=>{
      this.loadTodos();
    })
    console.log('onInit')
  }

  loadTodos(){
    this.todoService.getTodos().then(todos=>{
      this.todos = todos
    })
  }
  
  // addItem(){
  //   if (this.todos){
  //     if (this.todos.length>0){
  //       this.newTodo.id=this.todos[this.todos.length-1].id+1;
  //     }
  //   }
  //   this.todoService.addTodo(this.newTodo).then(item =>{
  //     this.newTodo = <Todo>{};
      
  //     this.loadTodos();
  //   })
  // }

  // updateTodo(todo: Todo){
  //   todo.name = `UPDATED: {todo.name}`;

  //   this.todoService.updateTodo(todo).then(todo=>{
  //     console.log('updated');
  //     // this.mylist.closeSlidingItems();
  //     this.loadTodos();
  //   })
  // }

  // deleteTodo(todo:Todo){
  //   console.log(todo.id)
  //   this.todoService.deleteTodo(todo.id).then(item=>{
  //     this.loadTodos();
  //   })
  // }

}


// {# <ion-item-options side="end">
// <ion-item-option color="secondary" (click)="updateTodo(todo)">Maj</ion-item-option>
// <ion-item-option color="danger" (click)="deleteTodo(todo)">Suppr</ion-item-option>
// </ion-item-options> #}