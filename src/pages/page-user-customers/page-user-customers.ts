import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http }  from '@angular/http'

import { MenuPage } from '../page-menu/page-menu';
import { UserInboxPage } from '../page-user-inbox/page-user-inbox';
import { UserAddCustomerPage } from '../page-user-add-customer/page-user-add-customer';

import * as $ from "jquery";
import { Storage } from '@ionic/storage';
import { ApiService } from '../../service/api.service.component';
import  moment  from 'moment';

import Config from '../../app/config';

@Component({
  selector: 'page-user-customers',
  templateUrl: 'page-user-customers.html'
})

export class UserCustomersPage {
  customersList: any;
  user: string[];
  hasData: boolean = false;
  customerId: any;
  thisFName: any;
  thisLName: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private storage: Storage,
    public api: ApiService,
    ) {
  }

  showMenu() {
    this.navCtrl.push(MenuPage, {
      animate: true,
      direction: 'forward'
    });
  }

  goInbox() {
    this.navCtrl.setRoot(UserInboxPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  dateFormat(value) {
    var dateNow = moment(value),
      format = dateNow.format('MMM D YYYY at h:mm A'),
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

  toggleAccordion($event) {
    var thisElem = $($event.currentTarget).closest('.holder-accordion');

    $(thisElem).toggleClass('show').siblings('.holder-accordion').removeClass('show');
    $('.dropdown-menu').fadeOut('150');
  }

  showDropdown($event) {
    var thisElem = $($event.currentTarget).find('.dropdown-menu'),
      thisIndex = thisElem.closest('.holder-accordion').index();

    this.customerId = this.customersList[thisIndex]._id;
    this.thisFName = this.customersList[thisIndex].first_name,
    this.thisLName = this.customersList[thisIndex].last_name;

    this.getName(this.thisFName,this.thisLName);
    $(thisElem).fadeToggle('150');
    $('.dropdown-menu').not(thisElem).hide();
  }

  getName(fName,lName) {
    $('.name').text(fName + ' ' + lName + '\'s');
  }

  updateModal(modalName) {
    this.openModal('#' + modalName +'-modal');
  }

  updateThis(updateType) {
    $('#btn-' + updateType).append('<span class="fa fa-spinner fa-spin"></span>');

    if (updateType == 'delete') {
      this.api.Users.user_delete(this.customerId).then(res => {
        $('#btn-delete').find('.fa-spin').remove();
        this.closeModal();
        this.ionViewWillEnter();
        $('.success').text('deleted');
        this.openModal('#success-modal');
      })
    } else if (updateType == 'suspend') {
      this.api.Users.user_suspend(this.customerId).then(res => {
        $('#btn-suspend').find('.fa-spin').remove();
        this.closeModal();
        this.ionViewWillEnter();
        $('.success').text('suspended');
        this.openModal('#success-modal');
      })
    }
  }

  openModal(modal) {
    $(modal).fadeIn('150');
  }

  closeModal() {
    $('.confirmation-modal').fadeOut('150');
  }

  ionViewWillEnter() {
    this.storage.get('user').then(user =>{
      this.user = user;
      this.api.Users.user_list(user._id,user.permission,user.account_type).then(users => {
        this.customersList = users;
        this.hasData = true;

        $('body').find('.fa.loader').remove();
      })
    });
  }

  goAddUser() {
    this.navCtrl.push(UserAddCustomerPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  // removeDeleteOpt(index) {
  //   $('.holder-accordion').eq(index).find('.dropdown-menu').find('li:last-child').remove();
  // }
}
