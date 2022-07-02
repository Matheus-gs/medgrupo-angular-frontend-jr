import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EscolaService } from "src/app/services/escola.service";
import { DialogData } from "src/app/models/dialogData.model";
import { AlertMessageService } from "src/app/services/alert-message.service";

@Component({
  selector: "app-escola-create",
  templateUrl: "./create-escola.component.html",
  styleUrls: ["./create-escola.component.css"],
})
export class CreateEscolaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private escolaService: EscolaService,
    private formBuilder: FormBuilder,

    private alertMessage: AlertMessageService,

    public dialogRef: MatDialogRef<CreateEscolaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ["", Validators.required],
      endereco: ["", Validators.required],
      telefone: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    // Se tiver um id sendo passado nos dados do dialog vamos fazer uma requisição para preencher o dialog com os dados referentes aquele id
    this.data &&
      this.escolaService.read(this.data.id).subscribe((data) => {
        this.formGroup = this.formBuilder.group({
          nome: [data["nome"], Validators.required],
          endereco: [data["endereco"], Validators.required],
          telefone: [data["telefone"], Validators.required],
        });
      });
  }

  handleCreate(): void {
    const data = this.formGroup.value;

    this.data
      ? // Se TIVER um id sendo passado nos dados do dialog vamos fazer a requisição para atualizar os dados referentes aquele id
        this.escolaService.update(this.data.id, data).subscribe(() => {
          this.dialogRef.close();
          this.alertMessage.showMessage(
            "Os dados foram atualizados com sucesso!"
          );
        })
      : // Se NÃO tiver um id, então vamos adicionar uma nova informação no banco
        this.escolaService.create(data).subscribe(() => {
          this.dialogRef.close();
          this.alertMessage.showMessage("Escola cadastrada com sucesso!");
        });
  }

  handleCancelCreate(): void {
    this.dialogRef.close();
  }
}
