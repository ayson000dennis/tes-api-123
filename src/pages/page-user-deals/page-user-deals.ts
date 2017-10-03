import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../service/api.service.component';
import { Storage } from '@ionic/storage';

import { UserScannerPage } from '../page-user-scanner/page-user-scanner';
import { UserRedeemPage } from '../page-user-redeem/page-user-redeem';
import * as $ from "jquery";
import  moment  from 'moment';

@Component({
  selector: 'page-user-deals',
  templateUrl: 'page-user-deals.html'
})

export class UserDealsPage {
  user: string[];
  business_id: any;
  hasData: boolean = false;
  dealsList: any;
  customer : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api:ApiService,
    private storage: Storage){

      this.business_id = navParams.get('business_id');
      this.customer = navParams.get('customer');
  }

  goScanner() {
    this.navCtrl.setRoot(UserScannerPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  ionViewWillEnter(){
    // console.log(this.customer)
    this.api.Loyalty.loyalty_list(this.business_id,this.customer.customer.user_id[0]).then(users => {
      this.dealsList = users;
      // console.log(this.dealsList)
      this.hasData = true;
    })
  }

  dateFormat(value) {
    var dateNow = moment(value),
      format = dateNow.format('MMM/D/YYYY'),
      newDateNow = new Date(value),
      getYear = newDateNow.getFullYear();

    format = format.replace("amt", "at");
    format = format.replace("pmt", "at");

    if (getYear == 1970) {
      return '-'
    } else {
      return format;
    }
  }
  
  Redeem(deal){
    console.log(this.customer.customer.user_id[0])
    this.navCtrl.push(UserRedeemPage,{
      deal : deal,
      business_id : this.business_id,
      customer_id : this.customer.customer.user_id[0]
    }, {
    animate: true,
    direction: 'forward'
  });
  }
}
