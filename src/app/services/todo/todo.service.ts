import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Todo } from '../../model/todo';
// import { IonItemSliding } from '@ionic/angular';
// import { isNgTemplate } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private TODO_KEY="todoList";

  constructor(public storage:Storage) { }

  //Creation
  addTodo(todo: Todo): Promise<any>{
    return this.storage.get(this.TODO_KEY).then((todos: Todo[])=>{
      if (todos){
        todos.push(todo);
        return this.storage.set(this.TODO_KEY, todos);
      }else{
        return this.storage.set(this.TODO_KEY, [todo]);
      }
    });
  }

  //Lecture
  getTodos(): Promise<Todo[]>{
    return this.storage.get(this.TODO_KEY);
  }

  //Maj
  updateTodo(todo: Todo): Promise<any>{
    return this.storage.get(this.TODO_KEY).then((todos: Todo[])=>{
      if (!todos || todos.length === 0){
        return null;
      }

      let newTodos: Todo[]=[];

      for(let atodo of todos){
        if(atodo.id === todo.id){
          newTodos.push(todo);
        } else {
          newTodos.push(atodo);
        }
      }
      return this.storage.set(this.TODO_KEY, newTodos);
    });
  }

  //suppression
  deleteTodo(id: number): Promise<Todo>{
    return this.storage.get(this.TODO_KEY).then((todos:Todo[])=>{
      if (!todos||todos.length===0){
        return null;
      }

      let tooKeep: Todo[] = [];

      for (let atodo of todos){
        if (atodo.id !== id){
          tooKeep.push(atodo);
        }
      }
    });
  }
}
