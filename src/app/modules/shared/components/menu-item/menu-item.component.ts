import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  basePath:string = "../../../../../assets/";
  imgSrc!: string;

  @Input() icone!: string;
  @Input() iconeHover!: string;
  @Input() mouseOver: boolean = true;
  @Input() texto!:string;
  @Input() link!: string;
  active: boolean = false;
  subscriptions!: Subscription;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.active = this.router.url.includes(this.link);
    this.imgSrc = this.active? this.basePath+this.iconeHover:this.basePath+this.icone;
  }

}
