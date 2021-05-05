import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmaFormComponent } from './turma-form/turma-form.component';
import { TurmaListComponent } from './turma-list/turma-list.component';

const routes: Routes = [
  { path: '', component: TurmaListComponent },
  { path: 'new', component: TurmaFormComponent },
  { path: ':id/edit', component: TurmaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TurmaRoutingModule {}
