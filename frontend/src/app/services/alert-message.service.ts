import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class AlertMessageService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
