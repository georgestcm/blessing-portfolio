import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    showTechListSwitcher: boolean = true;
    currentProject: string = ''
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }
  showTechList(){
  this.showTechListSwitcher = !this.showTechListSwitcher;
  }


 hoverOn(value: string){
    this.currentProject = value;
 }

 hoverOff(value: string){
    this.currentProject = value
 }
}
