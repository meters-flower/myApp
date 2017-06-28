import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { UserService } from '../../providers/user.service';

@Component({
  templateUrl: 'signup.html'
})
export class SignupPage {
	account: {
		username: string,
		email: string,
		password: string
	}
  constructor(
  	public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public user: UserService
  ) { 
  	this.account = {
			username: 'admin',
			email: 'test@example.com',
			password: '123456'  		
  	};
  }

  doSignup() {
  	this.user.signup(this.account).subscribe(res => {
      if(res.message) {
        let toast = this.toastCtrl.create({
          message: res.message,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();      
        return;        
      }
      this.showPrompt();
  	}, err=> {
      console.log('err',err)
  	})
  }

  /* 显示提示框 */
  showPrompt() {
     let prompt = this.alertCtrl.create({
      title: '提示',
      message: "注册成功，请返回登录",
      buttons: [
        {
          text: '确定',
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();   
  }
}
