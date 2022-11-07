import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  basePath:string = "../../../../../assets/";
  @Input() icon!:string;
  @Input() width!:string;
  @Input() height!:string;
  iconPath!:string;
  constructor() { }

  ngOnInit(): void {
    this.iconPath = this.basePath+this.icon;
    console.log(this.iconPath)
  }

}
