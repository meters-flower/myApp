import { Injectable } from '@angular/core';
import { Item } from '../interface/item';
import { ITEMS } from '../mocks/items';

@Injectable()
export class ItemService {
  items: Item[] = [];
  defaultItem: Item;

  constructor() {
  	this.getItems().then(items => {
  		this.items = items;
  		this.defaultItem = this.items[0];
  	});
  }	

  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
  	this.items.push(item);
  }

  del(item: Item) {
  	this.items.splice(this.items.indexOf(item), 1);
  }
}