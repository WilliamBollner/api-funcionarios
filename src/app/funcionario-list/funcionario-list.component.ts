import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, NgbAlertModule],
  templateUrl: './funcionario-list.component.html',
  styleUrl: './funcionario-list.component.scss'
})
export class FuncionarioListComponent implements OnInit  {
  funcionarios: any[] = [];
  message: string = '';

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
        this.message = response.status === 'Ok' ? 'success' : 'error';
        console.log(response.status);
        this.loadFuncionarios();
      });
    }
  }

}
