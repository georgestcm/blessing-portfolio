import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   showSideBar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  showHideSidebar(){
    this.showSideBar = !this.showSideBar;
  }
}
