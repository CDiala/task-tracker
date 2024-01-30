import { Component } from '@angular/core';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { KanbanFormComponent } from '../kanban-form/kanban-form.component';
import { NicePipe } from '../../pipes/nice.pipe';
import { TasksService } from 'src/app/services/tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { ITask, ITaskInfo, IUser } from 'src/app/interfaces/i-user';
import { createNewTask, generateTaskList } from 'src/utils/taskMan';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.css',
  imports: [
    KanbanCardComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    AngularMaterialModule,
    KanbanFormComponent,
    NicePipe,
  ],
  providers: [HttpClientModule],
})
export class KanbanColumnComponent {
  open: ITaskInfo[] = [];
  pending: ITaskInfo[] = [];
  inProgress: ITaskInfo[] = [];
  completed: ITaskInfo[] = [];
  unknownUsers: IUser = {
    _id: '',
    full_name: null,
    tasks: [],
  };
  displayForm: boolean = false;
  currentTask: ITask | undefined;

  constructor(private kService: TasksService) {
    this.yourFunction();
  }

  async yourFunction() {
    try {
      [this.open, this.pending, this.inProgress, this.completed] =
        this.getTasks(await this.fetchData());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchData(): Promise<IUser[]> {
    try {
      // Return all users
      const users = await this.kService.getUsersAsync();
      return users as IUser[];
    } catch (error) {
      // Display error and return empty array
      console.error('Error fetching users in component:', error);
      return [];
    }
  }

  getTasks(arr: IUser[]): ITaskInfo[][] {
    let open: ITaskInfo[] = [];
    let pending: ITaskInfo[] = [];
    let inProgress: ITaskInfo[] = [];
    let completed: ITaskInfo[] = [];

    if (arr) {
      return generateTaskList(arr);
    }
    return [open, pending, inProgress, completed];
  }

  handleFormSubmit(event: ITask) {
    const payload = createNewTask(event);
    if (payload) {
      this.unknownUsers = {
        ...payload,
        tasks: [...this.unknownUsers.tasks, ...payload.tasks],
      };
    }

    this.open.push({
      id: payload?._id as string,
      title: payload?.tasks[0].title as string,
    });
  }

  handleFormDisplay() {
    this.displayForm = !this.displayForm;
  }

  async editTask(item: ITaskInfo) {
    // get full task details and pass to form
    const taskData = await this.kService.getTaskDetails(item);

    this.currentTask = { ...taskData };
    this.handleFormDisplay();
  }

  handleFormClose() {
    this.clearCurrentTask();
    this.handleFormDisplay();
  }

  clearCurrentTask() {
    if (this.currentTask) {
      for (let key of Object.keys(this.currentTask)) {
        const currentValue = this.currentTask[key];

        if (typeof currentValue === 'string') {
          this.currentTask[key] = '';
        } else if (key === 'status') {
          this.currentTask[key] = 'open';
        }
      }
    }
  }

  drop(event: CdkDragDrop<ITaskInfo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // update task's status in store.json

    const currentIndex = event.currentIndex;
    const task = event.container.data[currentIndex];

    // console.log('task', task);
  }
}
