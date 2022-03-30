import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activateMenu: boolean = false;
  @ViewChild('menu') menu: ElementRef | any;
  @ViewChild('menuIcon') menuIcon: ElementRef | any;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
     if(e.target !== this.menu.nativeElement && e.target !== this.menu.nativeElement
       && e.target !== this.menuIcon.nativeElement && e.target !== this.menuIcon.nativeElement && !this.menu.nativeElement.contains(e.target) && !this.menuIcon.nativeElement.contains(e.target)){
         this.activateMenu = false;
     }
    });
 }
}