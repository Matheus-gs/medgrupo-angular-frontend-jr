import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { Escola } from "../../../models/escola.model";
import { EscolaService } from "../../../services/escola.service";
import { CreateEscolaComponent } from "../create-escola/create-escola.component";
import { MatDialog } from "@angular/material/dialog";
import { DeleteConfirmComponent } from "src/app/components/delete-confirm/delete-confirm.component";

@Component({
  selector: "app-home",
  templateUrl: "./list-escola.component.html",
  styleUrls: ["./list-escola.component.css"],
})
export class ListEscolaComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "nome",
    "endereco",
    "telefone",
    "actions",
  ];
  dataSource: MatTableDataSource<Escola>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private escolaService: EscolaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    try {
      this.escolaService.findAll().subscribe((result: Escola[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } catch (error) {
      console.log(error);
    }
  }

  openCreateModal(): void {
    const dialogRef = this.dialog.open(CreateEscolaComponent, {
      width: "550px",
    });

    dialogRef.afterClosed().subscribe(() => {
      this.load();
    });
  }

  openUpdateModal(id: number): void {
    const dialogRef = this.dialog.open(CreateEscolaComponent, {
      width: "550px",
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.load();
    });
  }

  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: "550px",
      data: { id: id, type: "escola" },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.load();
    });
  }
}
