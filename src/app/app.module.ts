import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SubHeaderComponent } from "./components/subHeader/subHeader.component";
import { HomePageComponent } from "./pages/homepage/homepage.component";
import { VideoComponent } from "./pages/video/video.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VideoComponent,
    FooterComponent,
    HeaderComponent,
    SubHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
