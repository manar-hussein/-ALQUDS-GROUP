import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  darkbackground:BehaviorSubject<boolean>=new BehaviorSubject(false);
  
}
