import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ToolsPage } from '../tools/tools';
import { FilesPage } from '../files/files';
import { HomePage } from '../home/home';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilesPage;
  tab3Root = ToolsPage;
  tab4Root = ProfilePage;

  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.user=navParams.get('user');

  }
  onPageDidEnter(){
    alert(this.user.username);
  }
}
