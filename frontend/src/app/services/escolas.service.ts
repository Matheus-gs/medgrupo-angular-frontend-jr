import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Escolas } from "../models/escolas.model";

@Injectable({
  providedIn: "root",
})
export class EscolasService {
  baseUrl = "http://localhost:3001/escolas";

  constructor(private http: HttpClient) {}

  create(data: Escolas): Observable<Escolas> {
    return this.http.post<Escolas>(this.baseUrl, data);
  }

  read(id: number = null): Observable<Escolas[]> {
    return id != null
      ? this.http.get<Escolas[]>(`${this.baseUrl}/${id}`) // Se passar o id no método read ele busca pelo id
      : this.http.get<Escolas[]>(this.baseUrl); // Se não ele buscará todos os dados
  }

  update(id: number, data: Escolas): Observable<Escolas> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Escolas>(url, data);
  }

  delete(id: number): Observable<Escolas> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Escolas>(url);
  }
}
