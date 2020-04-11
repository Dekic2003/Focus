import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss']
})
export class NavigacijaComponent implements OnInit {
  scrWidth = window.innerWidth;
  constructor() { }

  ngOnInit(): void {
  }

}
