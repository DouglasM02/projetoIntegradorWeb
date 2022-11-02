import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imgLogo: string = '../../../../../assets/prestech-logo-white.svg';
  mouseOver: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
