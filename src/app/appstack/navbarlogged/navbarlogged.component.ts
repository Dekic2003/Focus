import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarlogged',
  templateUrl: './navbarlogged.component.html',
  styleUrls: ['./navbarlogged.component.scss']
})
export class NavbarloggedComponent implements OnInit {
  scrWidth = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
  }

}
