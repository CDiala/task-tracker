import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanFormComponent } from './components/kanban-form/kanban-form.component';
import { KanbanCardComponent } from './components/kanban-card/kanban-card.component';

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
    path: 'card',
    component: KanbanCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
