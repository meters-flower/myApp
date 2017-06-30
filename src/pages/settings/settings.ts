import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user.service';
import { WelcomePage } from '../welcome/welcome';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public user: UserService) { }

  /* 退出 */
  logout() {
  	this.user.logout().subscribe(res => {
  		this.navCtrl.setRoot(WelcomePage);
  		this.user.loggedIn(null);
  	});
  }
}
