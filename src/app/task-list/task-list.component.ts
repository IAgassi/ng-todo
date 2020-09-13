import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Todo } from '../Todo'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public todo_list = []

  constructor(private tservice: TaskService) { }

  ngOnInit(): void {
    this.tservice.get_fakes().subscribe(data => this.todo_list = data);
  }

}
