import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import {Escola} from "../models/escola.model";

@Injectable({
  providedIn: "root",
})
export class EscolaService {
  baseUrl = `${environment.api_url}/escolas`

  constructor(
      private http: HttpClient
  ) {}

  findAll(): Observable<Escola[]> {
    return this.http.get<Escola[]>(`${this.baseUrl}`)
  }

  create(data: Escola): Observable<Escola> {
    return this.http.post<Escola>(this.baseUrl, data);
  }

  read(id: number = null): Observable<Escola[]> {
    return id != null
      ? this.http.get<Escola[]>(`${this.baseUrl}/${id}`) // Se passar o id no método read ele busca pelo id
      : this.http.get<Escola[]>(this.baseUrl); // Se não ele buscará todos os dados
  }

  update(id: number, data: Escola): Observable<Escola> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Escola>(url, data);
  }

  delete(id: number): Observable<Escola> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Escola>(url);
  }
}
