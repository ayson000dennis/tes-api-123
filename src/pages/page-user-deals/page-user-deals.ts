import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { UserLoyaltyPage } from '../page-user-loyalty/page-user-loyalty';
import { UserFavoritesPage } from '../page-user-favorites/page-user-favorites';
import { UserCardPage } from '../page-user-card/page-user-card';
import { UserDealsDetailsPage } from '../page-user-deals-details/page-user-deals-details';

import * as $ from "jquery";

@Component({
  selector: 'page-user-deals',
  templateUrl: 'page-user-deals.html'
})

export class UserDealsPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController,
    public platform: Platform){

    platform.ready().then(() => {
      var addActive = function() {
        if ($('.label-find').length > 0) {
          $('.label-find').addClass('active');
          clearInterval(_interval);
        }
      },
        _interval = setInterval(addActive, 1);
    });

    this.pages = [
      { title: 'loyalty', component: UserLoyaltyPage },
      { title: 'favorites', component: UserFavoritesPage },
      { title: 'find deals', component: UserDealsPage },
      { title: 'card', component: UserCardPage }
    ];
  }

  goHome() {
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  goDetails() {
    this.navCtrl.setRoot(UserDealsDetailsPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  openPage(page) {
    this.navCtrl.setRoot(page.component);
  }
}
