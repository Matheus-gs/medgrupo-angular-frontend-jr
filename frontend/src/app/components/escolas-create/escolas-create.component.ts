import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EscolasService } from "src/app/services/escolas.service";
import { DialogData } from "src/app/models/dialogId.model";

@Component({
  selector: "app-escolas-create",
  templateUrl: "./escolas-create.component.html",
  styleUrls: ["./escolas-create.component.css"],
})
export class EscolasCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private escolasService: EscolasService,
    private formBuilder: FormBuilder,

    public dialogRef: MatDialogRef<EscolasCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ["", Validators.required],
      endereco: ["", Validators.required],
      telefone: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  handleCreate(): void {
    const data = this.formGroup.value;
    this.escolasService.create(data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  handleCancelCreate(): void {
    this.dialogRef.close();
  }
}
