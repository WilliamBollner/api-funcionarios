import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

interface ApiResponse {
  status: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = 'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/';

  constructor(private http: HttpClient) {}

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  updateFuncionario(id: number, funcionario: Funcionario): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, funcionario);
  }

  deleteFuncionario(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
