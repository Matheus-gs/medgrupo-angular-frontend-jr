import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { DialogData } from "src/app/models/dialogId.model";
import { Escolas } from "src/app/models/escolas.model";
import { EscolasService } from "src/app/services/escolas.service";
import { TurmasService } from "src/app/services/turmas.service";

@Component({
  selector: "app-turmas-create",
  templateUrl: "./turmas-create.component.html",
  styleUrls: ["./turmas-create.component.css"],
})
export class TurmasCreateComponent implements OnInit {
  formGroup: FormGroup;

  listaEscolas: Escolas[];

  constructor(
    private escolasService: EscolasService,
    private turmasService: TurmasService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TurmasCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.formGroup = this.formBuilder.group({
      idEscola: ["", Validators.required],
      nome: ["", Validators.required],
      serie: ["", Validators.required],
      grau: ["", Validators.required],
    });
  }

  getData(id: number): void {
    this.escolasService.read(id).subscribe((data) => {
      this.listaEscolas = data;
    });
  }

  updateOptions() {
    this.escolasService.read().subscribe((data) => {
      this.listaEscolas = data;
    });
  }

  ngOnInit(): void {
    this.updateOptions();
  }

  handleCreate(): void {
    const data = this.formGroup.value;
    this.turmasService.create(data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  handleCancelCreate(): void {
    this.dialogRef.close();
  }
}
