import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  Todo_List : any
  FAKE_URL: string = 'http://localhost:8080/test/todos';
  URL: string = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) { }

  get_todos(){
    this.Todo_List = this.http.get<Todo[]>(this.URL);
    return this.Todo_List
  }

  insert_todo(){
    // makes post request to same URL with payload of new input
    return this.Todo_List
  }

  delete_todo(){
    // makes delete request to API, once it's done
    return this.Todo_List
  }

  get_fakes(){
    this.Todo_List = this.http.get<Todo[]>(this.FAKE_URL);
    return this.Todo_List
  }

}
