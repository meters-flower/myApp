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
      //登录成功，保存用户信息，并跳转到列表页
      this.user.loggedIn(res)
      this.navCtrl.setRoot(TabsPage);
    }, err => {
      //登录失败,反馈信息，并清空密码
      let toast = this.toastCtrl.create({
        message: '账号或密码错误',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.account.password = '';

      // ---TODO：因为没有编写服务器端的，所以登录绝对失败，这里就直接进入列表页咯
      this.navCtrl.setRoot(TabsPage);
    });
  }
}
