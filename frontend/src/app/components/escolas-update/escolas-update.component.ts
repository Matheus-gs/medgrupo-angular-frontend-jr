import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/models/dialogId.model";
import { Escolas } from "src/app/models/escolas.model";
import { EscolasService } from "src/app/services/escolas.service";

@Component({
  selector: "app-escolas-update",
  templateUrl: "./escolas-update.component.html",
  styleUrls: ["./escolas-update.component.css"],
})
export class EscolasUpdateComponent implements OnInit {
  formGroup: FormGroup;
  escola: Escolas[];

  id: number;

  constructor(
    private escolasService: EscolasService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EscolasUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // Pegando o id do modal
    this.id = this.data.id;

    // Valores que vamos enviar através do método update
    this.formGroup = this.formBuilder.group({
      nome: ["", Validators.required],
      endereco: ["", Validators.required],
      telefone: ["", Validators.required],
    });
  }

  handleUpdate(): void {
    const data = this.formGroup.value;
    this.escolasService.update(this.id, data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  handleCancelUpdate(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    // Lendo os dados atuais para preencher o formulário
    this.escolasService.read(this.id).subscribe((data) => {
      this.escola = data;
      // Preenchendo os campos com os valores atuais
      this.formGroup = this.formBuilder.group({
        nome: [this.escola["nome"], Validators.required],
        endereco: [this.escola["endereco"], Validators.required],
        telefone: [this.escola["telefone"], Validators.required],
      });
    });
  }
}
