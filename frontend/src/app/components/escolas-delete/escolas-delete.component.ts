import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { DialogData } from "src/app/models/dialogId.model";
import { EscolasService } from "src/app/services/escolas.service";

@Component({
  selector: "app-escolas-delete",
  templateUrl: "./escolas-delete.component.html",
  styleUrls: ["./escolas-delete.component.css"],
})
export class EscolasDeleteComponent implements OnInit {
  id: number;

  constructor(
    private escolasService: EscolasService,
    public dialogRef: MatDialogRef<EscolasDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // Pegando o id do modal
    this.id = this.data.id;
  }

  ngOnInit(): void {}

  handleDelete(): void {
    this.escolasService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
  handleCancelDelete(): void {
    this.dialogRef.close();
  }
}
