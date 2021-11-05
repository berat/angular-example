import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  social: any[] = [
    {
      key: "twitter",
      url: "https://twitter.com/beratbozkurt0"
    },
    {
      key: "facebook",
      url: "https://facebook.com/beratbozkurt0"
    },
    {
      key: "instagram",
      url: "https://instagram.com/beratbozkurt0"
    },
  ]

  stores: any[] = [
    {
      key: "app",
      url: "https://twitter.com/beratbozkurt0"
    },
    {
      key: "play",
      url: "https://facebook.com/beratbozkurt0"
    },
    {
      key: "windows",
      url: "https://instagram.com/beratbozkurt0"
    },
  ]
  constructor() { }



  ngOnInit() {
  }

}
