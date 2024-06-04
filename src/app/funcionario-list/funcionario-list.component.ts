import { Component, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastService } from '../services/toast-service';
import { ToastsContainer } from '../utils/toasts-container.component';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, ToastsContainer],
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit, OnDestroy {
  toastService = inject(ToastService);
  funcionarios: any[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.loadFuncionarios();
  }

  loadFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe(data => {
      this.funcionarios = data;
    });
  }

  deleteFuncionario(id: number) {
    if (confirm('Você tem certeza que deseja excluir este funcionário?')) {
      this.funcionarioService.deleteFuncionario(id).subscribe(response => {
        if (response.status === 'Ok') {
          this.showSuccess(response.mensagem);
        } else {
          this.showDanger(response.mensagem);
        }
        this.loadFuncionarios();
      });
    }
  }

  showSuccess(template: string) {
    this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(template: string) {
    this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}