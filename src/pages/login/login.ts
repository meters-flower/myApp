import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserService } from '../../providers/user.service';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
	account: {
		username: string,
		password: string
	}
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public user: UserService) 
  {
  	this.account = {
  		username: 'admin',
  		password: '123456'
  	};
  }

  /* 登录响应事件 */
  doLogin() {
    this.user.login(this.account).subscribe(res => {
      //登录失败,反馈信息
      if(res.message)  return this.showToast(res.message);

      //登录成功，保存用户信息，并跳转到列表页
      this.user.loggedIn(res);
      this.navCtrl.setRoot(TabsPage);
    }, err => {
      //其他错误
      this.showToast(err.statusText)
      this.account.password = '';
    });
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
