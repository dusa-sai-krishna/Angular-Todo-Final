import { Injectable, signal} from '@angular/core';
import {User} from "./user.model";
import {DUMMY_USERS} from "../../../DUMMY_USERS";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  _DUMMY_USERS=signal<User[]>(DUMMY_USERS);
  users = this._DUMMY_USERS.asReadonly();

}
