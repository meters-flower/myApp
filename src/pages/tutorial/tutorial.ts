import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

/* 接口类型定义 */
export interface Slide {
  title: string;
  description: string;
  image: string;
}

/* 定义组件 */
@Component({
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[]; 
  showSkip = true; //是否显示‘跳过’按钮

  /*构造函数 */
  constructor(public navCtrl: NavController, public menu: MenuController) {
	  this.slides = [
	    {
	      title: '标题一',
	      description: '描述一',
	      image: 'assets/img/ica-slidebox-img-1.png',
	    },
	    {
	      title: '标题二',
	      description: '描述二',
	      image: 'assets/img/ica-slidebox-img-2.png',
	    },
	    {
	      title: '标题三',
	      description: '描述三',
	      image: 'assets/img/ica-slidebox-img-3.png',
	    }
	  ];
  }

  /* 进入页面后，禁止左侧菜单 */
  ionViewDidEnter() {
		this.menu.enable(false);
  }

  /* 即将离开当前页面时，运行左侧菜单 */
	ionViewWillLeave() {
		this.menu.enable(true);
	}  


/** ==== 事件方法 ==== **/
	
  /* 切换到欢迎页面, */
  startApp() {
    this.navCtrl.setRoot(WelcomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  /* sliders 是否为最后一个 */
  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

}
