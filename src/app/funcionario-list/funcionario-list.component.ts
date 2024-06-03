import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink],
  templateUrl: './funcionario-list.component.html',
  styleUrl: './funcionario-list.component.scss'
})
export class FuncionarioListComponent implements OnInit  {
  funcionarios: any[] = [];
  message: string = '';
  messageClass: string = '';

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.loadFuncionarios();
  }

  loadFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe(data => {
      this.funcionarios = data;
    });
  }

  editFuncionario(employee: any) {
    // Implementar navegação para o componente de edição com os dados do funcionário
  }

  deleteFuncionario(id: number) {
    if (confirm('Você tem certeza que deseja excluir este funcionário?')) {
      this.funcionarioService.deleteFuncionario(id).subscribe(response => {
        this.message = response.mensagem;
        this.messageClass = response.status === 'Ok' ? 'success' : 'error';
        this.loadFuncionarios();
      });
    }
  }

}
