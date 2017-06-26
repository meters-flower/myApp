import { Component } from '@angular/core';
import { Item } from '../../interface/item';
import { ItemService } from '../../providers/item.service';
import { NavController, ModalController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { ItemCreatePage } from '../item-create/item-create';


@Component({
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
	currentItems : Item[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public itemService: ItemService) { 
			
  }

  ionViewWillEnter() {
  	this.currentItems = this.itemService.query();
  }

  addItem() {
    //创建模态框
    let addModal = this.modalCtrl.create(ItemCreatePage);

    //模态框关闭后调用
    addModal.onDidDismiss(item => {
      this.itemService.add(item);
    })

    //显示模态框
    addModal.present();
  }

  delItem(item) {
  	this.itemService.del(item);
  }

  openItem(item: Item) {
		this.navCtrl.push(ItemDetailsPage, {
	      item: item
	    });
	  }
}
