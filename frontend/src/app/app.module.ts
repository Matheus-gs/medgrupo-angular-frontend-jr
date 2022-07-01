// Default
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Material Modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

// Views
import { HomeComponent } from "./views/home/home.component";
import { EscolasComponent } from "./views/escolas/escolas.component";
import { TurmasComponent } from "./views/turmas/turmas.component";

// HTTP Client
import { HttpClientModule } from "@angular/common/http";
import { EscolasCreateComponent } from "./components/escolas-create/escolas-create.component";

// Angular Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EscolasUpdateComponent } from "./components/escolas-update/escolas-update.component";
import { EscolasDeleteComponent } from "./components/escolas-delete/escolas-delete.component";
import { TurmasCreateComponent } from "./components/turmas-create/turmas-create.component";
import { TurmasUpdateComponent } from "./components/turmas-update/turmas-update.component";
import { TurmasDeleteComponent } from "./components/turmas-delete/turmas-delete.component";

@NgModule({
  declarations: [
    // Default Component
    AppComponent,
    // Views
    HomeComponent,
    EscolasComponent,
    TurmasComponent,
    // Components
    EscolasCreateComponent,
    EscolasUpdateComponent,
    EscolasDeleteComponent,
    TurmasCreateComponent,
    TurmasUpdateComponent,
    TurmasDeleteComponent,
  ],
  imports: [
    // Default Imports
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material modules
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // HTTP Client
    HttpClientModule,
    // Angular Forms
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
