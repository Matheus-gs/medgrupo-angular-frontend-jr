import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EscolasCreateComponent } from "src/app/components/escolas-create/escolas-create.component";
import { EscolasDeleteComponent } from "src/app/components/escolas-delete/escolas-delete.component";
import { EscolasUpdateComponent } from "src/app/components/escolas-update/escolas-update.component";

import { Escolas } from "src/app/models/escolas.model";
import { EscolasService } from "src/app/services/escolas.service";

@Component({
  selector: "app-escolas",
  templateUrl: "./escolas.component.html",
  styleUrls: ["./escolas.component.css"],
})
export class EscolasComponent implements OnInit {
  listaEscolas: Escolas[];
  displayedColumns = ["nome", "endereco", "telefone", "actions"];

  constructor(
    private escolasService: EscolasService,
    public dialog: MatDialog
  ) {}

  updateTable() {
    this.escolasService.read().subscribe((data) => {
      this.listaEscolas = data;
    });
  }

  ngOnInit(): void {
    this.updateTable();
  }

  openCreateModal(): void {
    const dialogRef = this.dialog.open(EscolasCreateComponent, {
      width: "550px",
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }

  openUpdateModal(id: number): void {
    const dialogRef = this.dialog.open(EscolasUpdateComponent, {
      width: "550px",
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }

  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(EscolasDeleteComponent, {
      width: "550px",
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTable();
    });
  }
}
