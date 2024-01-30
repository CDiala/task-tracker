import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITaskInfo } from 'src/app/interfaces/i-user';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NicePipe } from '../../pipes/nice.pipe';

@Component({
  selector: 'app-kanban-card',
  standalone: true,
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.css',
  imports: [AngularMaterialModule, NicePipe],
})
export class KanbanCardComponent {
  @Input({ alias: 'taskInfo', required: true }) taskInfo!: ITaskInfo;
  @Output() click: EventEmitter<ITaskInfo> = new EventEmitter();
  isHovered: boolean = false;

  constructor() {}

  handleEdittask(event: Event, item: ITaskInfo) {
    event.stopPropagation();
    this.click.emit(item);
  }
}
