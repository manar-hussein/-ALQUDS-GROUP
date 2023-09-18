import { Component, OnInit } from '@angular/core';
import {NavbarService} from 'src/app/shared/services/navbar.service'

@Component({
  selector: 'app-group-about',
  templateUrl: './group-about.component.html',
  styleUrls: ['./group-about.component.css']
})
export class GroupAboutComponent implements OnInit{
  constructor(private _navbarService:NavbarService){}
  ngOnInit(): void {
    this._navbarService.darkbackground.next(true)
  }
}
