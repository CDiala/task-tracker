import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.css',
})
export class KanbanCardComponent {
  @Input({ alias: 'title', required: true }) title!: string;
  isHovered: boolean = false;

  constructor() {
    this.title = 'Go to class';
  }

  handleEdittask() {}
}
