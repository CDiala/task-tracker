import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanFormComponent } from './components/kanban-form/kanban-form.component';
import { KanbanColumnComponent } from './components/kanban-column/kanban-column.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: KanbanFormComponent,
  },
  {
    path: 'col',
    component: KanbanColumnComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
