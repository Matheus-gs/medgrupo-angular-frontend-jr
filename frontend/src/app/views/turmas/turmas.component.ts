import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TurmasCreateComponent } from "src/app/components/turmas-create/turmas-create.component";
import { TurmasDeleteComponent } from "src/app/components/turmas-delete/turmas-delete.component";
import { TurmasUpdateComponent } from "src/app/components/turmas-update/turmas-update.component";

import { Escolas } from "src/app/models/escolas.model";
import { Turmas } from "src/app/models/turmas.model";
import { EscolasService } from "src/app/services/escolas.service";
import { TurmasService } from "src/app/services/turmas.service";

@Component({
  selector: "app-turmas",
  templateUrl: "./turmas.component.html",
  styleUrls: ["./turmas.component.css"],
})
export class TurmasComponent implements OnInit {
  listaTurmas: Turmas[];
  listaEscolas: Escolas[];
  displayedColumns = ["nome", "endereco", "telefone", "actions"];

  // nomeEscola: string;

  constructor(
    private turmasService: TurmasService,
    private escolasService: EscolasService,
    public dialog: MatDialog
  ) {}

  updateTable() {
    this.turmasService.read().subscribe((data) => {
      this.listaTurmas = data;
    });

    this.escolasService.read().subscribe((data) => {
      this.listaEscolas = data;
    });
  }

  
  // getNameEscola(id: number): any {
  //   this.listaEscolas.filter(function (escola): any {
  //     if (escola.id === id) {
  //       this.nomeEscola = escola.nome;
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.updateTable();
    console.log(this.listaEscolas);
  }

  openCreateModal(): void {
    const dialogRef = this.dialog.open(TurmasCreateComponent, {
      width: "550px",
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }

  openUpdateModal(id: number): void {
    const dialogRef = this.dialog.open(TurmasUpdateComponent, {
      width: "550px",
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }

  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(TurmasDeleteComponent, {
      width: "550px",
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }
}
