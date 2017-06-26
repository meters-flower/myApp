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
    let addModal = this.modalCtrl.create(ItemCreatePage);
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
