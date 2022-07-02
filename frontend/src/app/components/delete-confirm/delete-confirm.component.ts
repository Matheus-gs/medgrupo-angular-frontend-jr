import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/models/dialogData.model";
import { AlertMessageService } from "src/app/services/alert-message.service";
import { EscolaService } from "src/app/services/escola.service";
import { TurmaService } from "src/app/services/turma.service";

@Component({
  selector: "app-delete-escola",
  templateUrl: "./delete-confirm.component.html",
  styleUrls: ["./delete-confirm.component.css"],
})
export class DeleteConfirmComponent implements OnInit {
  constructor(
    private escolaService: EscolaService,
    private turmaService: TurmaService,
    private alertService: AlertMessageService,
    public dialogRef: MatDialogRef<DeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  delete(): void {
    if (this.data != null) {
      if (this.data.type == "escola") {
        this.escolaService.delete(this.data.id).subscribe(() => {
          this.dialogRef.close();
          this.alertService.showMessage("Item removido com sucesso!");
        });
      } else if (this.data.type == "turma") {
        this.turmaService.delete(this.data.id).subscribe(() => {
          this.dialogRef.close();
          this.alertService.showMessage("Item removido com sucesso!");
        });
      }
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
