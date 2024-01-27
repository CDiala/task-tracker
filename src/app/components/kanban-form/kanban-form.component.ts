import { Component } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { InputGroupComponent } from '../input-group/input-group.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputDateComponent } from '../input-date/input-date.component';

@Component({
  selector: 'app-kanban-form',
  standalone: true,
  templateUrl: './kanban-form.component.html',
  styleUrl: './kanban-form.component.css',
  imports: [AngularMaterialModule, InputGroupComponent, InputDateComponent],
})
export class KanbanFormComponent {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.email]],
      due_date: ['', [Validators.required]],
    });
  }

  taskTitleInfo = {
    isPassword: false,
    placeholder: 'Task details...',
    error: '',
    label: 'Task Title',
  };

  handleFormSubmit() {
    console.log('button clicked', this.taskForm.value);
  }

  handleFormClose() {
    console.log('button clicked');
  }

  getDateValue(event: Event) {
    console.log(event);
  }
}
