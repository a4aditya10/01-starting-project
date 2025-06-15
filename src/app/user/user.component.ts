import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//     id:string,
//     avatar:string,
//     name:string
// };
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required:true}) user !: User;
   @Input({required:true}) selected!:boolean;
   @Output() select = new EventEmitter<string>();
   onSelectUser(){
     this.select.emit(this.user.id);
  }
  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }
}
