import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  type: string = "";
  loading: boolean = false;
  error: string = null;
  data: any[] = [];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    let tempType = this.route.snapshot.queryParams["type"];
    this.type = tempType.charAt(0).toUpperCase() + tempType.slice(1);

    this.httpClient.get("assets/sample.json").subscribe(
      (data: { total: number; entries: any[] }) => {
        setTimeout(() => {
          this.loading = true;
          this.data = data.entries.filter(
            (item) => item.programType === tempType
          );
          console.log(this.data) 
          console.log(tempType) 
          console.log(data.entries) 
        }, 1000);
      },
      (error) => {
        this.loading = true;
        this.error = "Oops, something went wrong...";
      }
    );
  }
}
