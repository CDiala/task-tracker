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

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.css',
  imports: [KanbanCardComponent, CdkDropListGroup, CdkDropList, CdkDrag],
})
export class KanbanColumnComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
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
  }
}
