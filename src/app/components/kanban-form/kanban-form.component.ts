import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { InputGroupComponent } from '../input-group/input-group.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputDateComponent } from '../input-date/input-date.component';
import { ITask } from 'src/app/interfaces/i-user';

@Component({
  selector: 'app-kanban-form',
  standalone: true,
  templateUrl: './kanban-form.component.html',
  styleUrl: './kanban-form.component.css',
  imports: [AngularMaterialModule, InputGroupComponent, InputDateComponent],
})
export class KanbanFormComponent implements OnInit {
  taskForm!: FormGroup;
  @Input({ alias: 'taskInfo', required: false }) taskInfo: ITask | undefined;
  @Output() closeEvent: EventEmitter<Event> = new EventEmitter();
  @Output() submitEvent: EventEmitter<ITask> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('form data', this.taskInfo);
    this.taskForm = this.fb.group({
      title: [this.taskInfo ? this.taskInfo.title : '', Validators.required],
      description: [
        this.taskInfo ? this.taskInfo.description : '',
        [Validators.required, Validators.email],
      ],
      due_date: [
        this.taskInfo ? this.taskInfo.due_date : '',
        [Validators.required],
      ],
      status: [this.taskInfo ? this.taskInfo.status : 'open'],
    });
  }

  handleFormSubmit(event: Event) {
    this.submitEvent.emit(this.taskForm.value as ITask);
  }

  handleFormClose(event: Event) {
    this.closeEvent.emit(event);
  }

  getDateValue(event: Event) {}
}
