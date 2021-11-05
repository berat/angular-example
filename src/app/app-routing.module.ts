import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./pages/homepage/homepage.component";
import { VideoComponent } from "./pages/video/video.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "video", component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
