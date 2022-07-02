import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HomeModule } from "./views/home/home.module";
import { HomeRoutingModule } from "./views/home/home-routing.modules";

@NgModule({
  declarations: [AppComponent],
  imports: [HomeModule, HomeRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
