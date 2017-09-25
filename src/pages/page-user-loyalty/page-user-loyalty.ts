import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { LoginPage } from '../page-login/page-login';
import { UserFavoritesPage } from '../page-user-favorites/page-user-favorites';
import { UserDealsPage } from '../page-user-deals/page-user-deals';
import { UserCardPage } from '../page-user-card/page-user-card';

import * as $ from "jquery";

@Component({
  selector: 'page-user-loyalty',
  templateUrl: 'page-user-loyalty.html'
})

export class UserLoyaltyPage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController,
    public platform: Platform,private qrScanner: QRScanner){

    platform.ready().then(() => {
      var addActive = function() {
        if ($('.label-loyalty').length > 0) {
          $('.label-loyalty').addClass('active');
          clearInterval(_interval);
        }
      },
        _interval = setInterval(addActive, 1);
    });
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

       // show camera preview
       this.qrScanner.show();

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
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
}
