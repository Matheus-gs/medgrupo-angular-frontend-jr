import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Turma } from "../models/turma.model";

@Injectable({
  providedIn: "root",
})
export class TurmaService {
  baseUrl = "http://localhost:3001/turmas";
  constructor(private http: HttpClient) {}

  create(data: Turma): Observable<Turma> {
    return this.http.post<Turma>(this.baseUrl, data);
  }

  read(id: number = null): Observable<Turma[]> {
    return id != null
      ? this.http.get<Turma[]>(`${this.baseUrl}/${id}`) // Se passar o id no método read ele busca pelo id
      : this.http.get<Turma[]>(this.baseUrl); // Se não ele buscará todos os dados
  }

  update(id: number, data: Turma): Observable<Turma> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Turma>(url, data);
  }

  delete(id: number): Observable<Turma> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Turma>(url);
  }
}
