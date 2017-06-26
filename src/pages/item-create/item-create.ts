import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  /* 关闭当前的 viewController ，可返回数据 */
  done() {
    this.viewCtrl.dismiss();
  }

}
