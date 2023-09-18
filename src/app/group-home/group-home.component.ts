import { Component } from '@angular/core';
import {NavbarService} from 'src/app/shared/services/navbar.service'

@Component({
  selector: 'app-group-home',
  templateUrl: './group-home.component.html',
  styleUrls: ['./group-home.component.css']
})
export class GroupHomeComponent {
  darkMode:any;
  constructor(private _navbarService:NavbarService){}
  ngOnInit(): void {
    this._navbarService.darkbackground.next(false)
  }

}
