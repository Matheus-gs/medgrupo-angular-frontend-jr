import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Turmas } from "../models/turmas.model";

@Injectable({
  providedIn: "root",
})
export class TurmasService {
  baseUrl = "http://localhost:3001/turmas";
  constructor(private http: HttpClient) {}

  create(data: Turmas): Observable<Turmas> {
    return this.http.post<Turmas>(this.baseUrl, data);
  }

  read(id: number = null): Observable<Turmas[]> {
    return id != null
      ? this.http.get<Turmas[]>(`${this.baseUrl}/${id}`) // Se passar o id no método read ele busca pelo id
      : this.http.get<Turmas[]>(this.baseUrl); // Se não ele buscará todos os dados
  }

  update(id: number, data: Turmas): Observable<Turmas> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Turmas>(url, data);
  }

  delete(id: number): Observable<Turmas> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Turmas>(url);
  }
}
