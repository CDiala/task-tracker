import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanFormComponent } from './components/kanban-form/kanban-form.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
