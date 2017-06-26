import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
	account: {
		username: string,
		password: string
	}
  constructor(public navCtrl: NavController) {
  	this.account = {
  		username: 'admin',
  		password: '123456'
  	};
  }

  /* 登录 */
  doLogin() {
  	this.navCtrl.setRoot(TabsPage);
  }
}
