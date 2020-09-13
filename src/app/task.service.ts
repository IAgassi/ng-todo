import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  FAKE_URL: string = 'http://localhost:8080/test/todos';
  URL: string = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) { }

  get_fakes(){
    return this.http.get<Todo[]>(this.FAKE_URL);
  }

}
