import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf]
})
export class FuncionarioEditComponent implements OnInit {
  funcionario: any = {};
  message: string = '';
  messageClass: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarios().subscribe(data => {
      this.funcionario = data.find((e: any) => e.id == id);
    });
  }

  updateFuncionario() {
    this.funcionarioService.updateFuncionario(this.funcionario.id, this.funcionario).subscribe(response => {
      this.message = response.mensagem;
      this.messageClass = response.status === 'Ok' ? 'success' : 'error';
    });
  }
}
