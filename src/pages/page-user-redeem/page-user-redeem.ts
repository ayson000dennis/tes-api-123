import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { MenuPage } from '../page-menu/page-menu';
import { UserScannerPage } from '../page-user-scanner/page-user-scanner';
import { UserInboxPage } from '../page-user-inbox/page-user-inbox';

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

  ionViewWillEnter() {
    this.business_id = this.navParams.get('business_id');
    this.customer_id = this.navParams.get('customer_id');
    this.deal = this.navParams.get('deal');
    this.hasData = true;

    $('.title-deal').text(this.deal.template);
  }

  ionViewDidLoad() {
    setTimeout(function() {
      $('input[name="quantity"]').focus();
    },500);
  }

  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  goBack() {
    this.navCtrl.pop({
      animate: true,
      direction: 'back'
    });
  }

  goScanner() {
    $('.confirmation-modal').hide();
    this.navCtrl.setRoot(UserScannerPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  goInbox() {
    this.navCtrl.setRoot(UserInboxPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  Submit() {
    var getTitle = this.deal.template,
      getBuyPcs = this.deal.buy_pcs,
      getBuyProd = this.deal.buy_product,
      getFreePcs = this.deal.get_pcs,
      getFreeProd = this.deal.get_product == '' ? getBuyProd : this.deal.get_product;

    if (this.quantity) {
      $('#btn-submit').append('<span class="fa fa-spinner fa-spin"></span>');
      $('input[type="number"]').removeClass('has-error').next('.text-validate').text('');
      this.api.Loyalty.loyalty_add(this.quantity,this.business_id,this.deal._id,this.customer_id)
      .then(data => {

        $('#btn-submit').find('.fa').remove();
        $('.free-pcs').text(getFreePcs);
        $('.free-prod').text(getFreeProd);

        if (parseInt(data.loyalty_details.stamp) >= parseInt(getBuyPcs)) {

          $('#complete-modal').fadeIn(250);
        } else {
          var stampsLeft = parseInt(getBuyPcs) - parseInt(data.loyalty_details.stamp);

          stampsLeft == 1 ?
          $('.stamps-left').text(stampsLeft + ' stamp') :
          $('.stamps-left').text(stampsLeft + ' stamps');

          this.quantity == 1 ?
          $('.stamps-added').text(this.quantity + ' stamp') :
          $('.stamps-added').text(this.quantity + ' stamps');

          $('#added-modal').fadeIn(250);
        }
      })
      .catch(error =>{
        $('#btn-submit').find('.fa').remove();
        console.log(error);
      })
    } else {
      $('input[type="number"]').addClass('has-error').next('.text-validate').text('Quantity must be greater than 0');
    }
  }
}
