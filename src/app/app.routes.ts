import { Routes } from '@angular/router';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';

export const routes: Routes = [
  { path: '', component: FuncionarioListComponent },
  { path: 'edit/:id', component: FuncionarioEditComponent }
];
