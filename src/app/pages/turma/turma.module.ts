import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaListComponent } from './turma-list/turma-list.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';

@NgModule({
  imports: [
    CommonModule,
    TurmaRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TurmaListComponent, TurmaFormComponent]
})

export class TurmaModule {}
