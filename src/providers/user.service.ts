import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  _user: any;
	private url = '/api/user'; 

  constructor(public http: Http) {
  }

  login(user: any) {
		return this.http.post(this.url + '/login', user)
      .map(res => res.json());
  }

  signup(user: any) {
		return this.http.post(this.url + '/signup', user)
      .map(res => res.json());
  }

  loggedIn(user: any) {
    this._user = user;
  }  

  logout() {
  	this._user =  null;
  }
}

