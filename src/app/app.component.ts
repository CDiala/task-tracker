import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-tracker';
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.email]],
      due_date: ['', [Validators.required]],
    });
  }

  getDateValue(event: Event) {
    console.log(event);
  }
}
