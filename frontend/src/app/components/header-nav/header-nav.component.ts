import { Component, OnInit } from "@angular/core";
import { AlertMessageService } from "src/app/services/alert-message.service";

@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html",
  styleUrls: ["./header-nav.component.css"],
})
export class HeaderNavComponent implements OnInit {
  constructor(private alertService: AlertMessageService) {}

  ngOnInit(): void {}

  unavailableMessage(): void {
    this.alertService.showMessage(
      "Página em construção, clique na opção 'escolas' para ver as funcionalidades disponíveis!",
      true
    );
  }
}
