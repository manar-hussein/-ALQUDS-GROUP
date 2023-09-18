import { Component, OnInit,OnChanges } from '@angular/core';
import {NavbarService} from 'src/app/shared/services/navbar.service'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Component({
  selector: 'app-group-navbar',
  templateUrl: './group-navbar.component.html',
  styleUrls: ['./group-navbar.component.css']
})
export class GroupNavbarComponent implements OnInit  {
  darkMode:any;
  constructor(public _navbarService:NavbarService){}
  ngOnInit(): void {
    this.darkMode =this._navbarService.darkbackground.subscribe()
  }
 


}
