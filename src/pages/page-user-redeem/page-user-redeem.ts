import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { MenuPage } from '../page-menu/page-menu';

import * as $ from "jquery";

import Config from '../../app/config';
import { ApiService } from '../../service/api.service.component';

@Component({
  selector: 'page-user-redeem',
  templateUrl: 'page-user-redeem.html'
})

export class UserRedeemPage {
  business_id : any
  customer_id : any
  deal : any
  quantity : any
  hasData : boolean = false
  constructor(
    public navCtrl: NavController,
    public navParams : NavParams,
    private api:ApiService) {
  }
  ionViewWillEnter (){
      this.business_id = this.navParams.get('business_id');
      this.customer_id = this.navParams.get('customer_id');
      this.deal = this.navParams.get('deal');
      this.hasData = true;
    console.log(this.deal)
  }
  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }
  Submit(){
    console.log(this.customer_id)
    this.api.Loyalty.loyalty_add(this.quantity,this.business_id,this.deal._id,this.customer_id)
    .then(data =>{
      console.log(data)
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
