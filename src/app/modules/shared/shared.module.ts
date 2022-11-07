import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { IconsComponent } from './components/icons/icons.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuComponent,IconsComponent]
})
export class SharedModule { }
