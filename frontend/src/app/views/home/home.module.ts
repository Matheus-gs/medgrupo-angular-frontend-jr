import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";

// Material Modules
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatSortModule } from "@angular/material/sort";

// HTTP Client
import { HttpClientModule } from "@angular/common/http";

// Angular Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Router
import { RouterModule } from "@angular/router";

// App routing
import { AppRoutingModule } from "../../app-routing.module";

// Angular Browser Modules
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Input Mask Module
import { IMaskModule } from "angular-imask";

// Locale
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

// View
import { HomeComponent } from "./home.component";

// View Components
import { CreateEscolaComponent } from "./create-escola/create-escola.component";
import { ListEscolaComponent } from "./list-escola/list-escola.component";

// Components
import { NavContainerComponent } from "src/app/components/nav-container/nav-container.component";
import { HeaderNavComponent } from "src/app/components/header-nav/header-nav.component";
import { DeleteConfirmComponent } from "src/app/components/delete-confirm/delete-confirm.component";

@NgModule({
  declarations: [
    HomeComponent,
    CreateEscolaComponent,
    ListEscolaComponent,
    NavContainerComponent,
    HeaderNavComponent,
    DeleteConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,

    // Material Modules
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
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSnackBarModule,
    // HTTP Client
    HttpClientModule,
    // Angular Forms
    FormsModule,
    ReactiveFormsModule,

    // Router
    RouterModule,

    // Input Mask Module
    IMaskModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  entryComponents: [],
})
export class HomeModule {}
