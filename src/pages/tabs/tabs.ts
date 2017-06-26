import { Component } from '@angular/core';
import { ListMasterPage } from '../list-master/list-master';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() { 
		this.tab1Root = ListMasterPage;
    this.tab2Root = SearchPage;
    this.tab3Root = SettingsPage;
  }
}