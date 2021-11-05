import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomePageComponent implements OnInit {
  loading: boolean = false;
  error: string = null;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 1000);
  }
}
