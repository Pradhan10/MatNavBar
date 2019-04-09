import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class UserService {

  readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({}, this.dataStore).users);
      resolver(user);
    });
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    return this.http.get<User[]>(this.usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error => {
        console.log('Failed to fetch users');
      });
  }

  // loadAllAgain() {
  //   return this.http.get<User[]>(this.usersUrl).pipe( this.dataStore.users);
  // }

}
