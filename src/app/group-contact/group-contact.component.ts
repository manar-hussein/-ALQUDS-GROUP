import { Component } from '@angular/core';
import {NavbarService} from 'src/app/shared/services/navbar.service'

@Component({
  selector: 'app-group-contact',
  templateUrl: './group-contact.component.html',
  styleUrls: ['./group-contact.component.css']
})
export class GroupContactComponent {
  constructor(private _navbarService:NavbarService){}
  ngOnInit(): void {
    this._navbarService.darkbackground.next(true)
  }

}
