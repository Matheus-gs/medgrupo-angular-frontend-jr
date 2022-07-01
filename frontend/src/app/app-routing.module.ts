import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Views
import { HomeComponent } from "./views/home/home.component";
import { EscolasComponent } from "./views/escolas/escolas.component";
import { TurmasComponent } from "./views/turmas/turmas.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "escolas",
    component: EscolasComponent,
  },
  {
    path: "turmas",
    component: TurmasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
