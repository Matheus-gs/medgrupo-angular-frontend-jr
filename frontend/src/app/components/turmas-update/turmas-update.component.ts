import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/models/dialogId.model";
import { Escolas } from "src/app/models/escolas.model";
import { EscolasService } from "src/app/services/escolas.service";
import { TurmasService } from "src/app/services/turmas.service";

@Component({
  selector: "app-turmas-update",
  templateUrl: "./turmas-update.component.html",
  styleUrls: ["./turmas-update.component.css"],
})
export class TurmasUpdateComponent implements OnInit {
  formGroup: FormGroup;
  listaEscolas: Escolas[];

  constructor(
    private escolasService: EscolasService,
    private turmasService: TurmasService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TurmasUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.formGroup = this.formBuilder.group({
      idEscola: ["", Validators.required],
      nome: ["", Validators.required],
      serie: ["", Validators.required],
      grau: ["", Validators.required],
    });
  }

  id: number;

  updateOptions() {
    this.escolasService.read().subscribe((data) => {
      this.listaEscolas = data;
    });
  }

  ngOnInit(): void {
    this.id = this.data.id;
    this.updateOptions();

    this.turmasService.read(this.id).subscribe((data) => {
      this.formGroup = this.formBuilder.group({
        idEscola: [data["idEscola"], Validators.required],
        nome: [data["nome"], Validators.required],
        serie: [data["serie"], Validators.required],
        grau: [data["grau"], Validators.required],
      });
    });
  }

  handleUpdate(): void {
    const data = this.formGroup.value;
    this.turmasService.update(this.id, data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  handleCancelUpdate(): void {
    this.dialogRef.close();
  }
}
