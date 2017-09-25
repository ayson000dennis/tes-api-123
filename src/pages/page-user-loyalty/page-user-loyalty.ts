import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { LoginPage } from '../page-login/page-login';
import { UserFavoritesPage } from '../page-user-favorites/page-user-favorites';
import { UserDealsPage } from '../page-user-deals/page-user-deals';
import { UserCardPage } from '../page-user-card/page-user-card';

import * as $ from "jquery";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-user-loyalty',
  templateUrl: 'page-user-loyalty.html'
})

export class UserLoyaltyPage {
  pages: Array<{title: string, component: any}>;
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(public navCtrl: NavController,
    public platform: Platform,private barcodeScanner: BarcodeScanner){

    platform.ready().then(() => {
      var addActive = function() {
        if ($('.label-loyalty').length > 0) {
          $('.label-loyalty').addClass('active');
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

  openPage(page) {
    this.navCtrl.setRoot(page.component);
  }
   createCode() {
    this.createdCode = this.qrData;
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
}
