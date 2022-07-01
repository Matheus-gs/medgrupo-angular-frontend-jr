import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/models/dialogId.model";
import { TurmasService } from "src/app/services/turmas.service";

@Component({
  selector: "app-turmas-delete",
  templateUrl: "./turmas-delete.component.html",
  styleUrls: ["./turmas-delete.component.css"],
})
export class TurmasDeleteComponent implements OnInit {
  constructor(
    private turmasService: TurmasService,
    public dialogRef: MatDialogRef<TurmasDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  id: number;

  ngOnInit(): void {
    this.id = this.data.id;
  }

  handleDelete(): void {
    this.turmasService.delete(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }

  handleCancelDelete(): void {
    this.dialogRef.close();
  }
}
