import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subHeader.component.html',
  styleUrls: ['./subHeader.component.scss']
})
export class SubHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
