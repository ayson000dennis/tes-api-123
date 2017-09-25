import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http }  from '@angular/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { SliderPage } from '../page-slider/page-slider';
import { ResetPassPage } from '../page-reset-pass/page-reset-pass';
import { UserLoyaltyPage } from '../page-user-loyalty/page-user-loyalty';

import * as $ from "jquery";
import 'rxjs/add/operator/map';

import Config from '../../app/config';

@Component({
  selector: 'page-login',
  templateUrl: 'page-login.html'
})

export class LoginPage {
  userData: any;

  posts: {username: string, password: string} = {
    username : '',
    password : ''
  }

  constructor(
    public navCtrl: NavController,
    public http : Http,
    private fb: Facebook,
    private gp: GooglePlus) {
  }

  goBack() {
    this.navCtrl.setRoot(SliderPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  fbConnect() {
    var baseUrl = Config.baseUrl;

    this.fb.login(['email', 'public_profile']).then((res: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,email', []).then(profile => {
        this.http.post(baseUrl + 'api/users/login',{email: profile['email'], is_social: '1', permission: '4'}).subscribe(res => {
          this.navCtrl.setRoot(UserLoyaltyPage, {}, {
            animate: true,
            direction: 'forward'
          });
        }, err => {
          console.log(err);
        });
      });
    }).catch(err => {
      console.log('Error logging into Facebook', err)
    });
  }

  gpConnect() {
    this.gp.login({})
      .then(res => console.log(res))
      .catch(err => console.log('error -- ' + err));
  }

  goReset() {
    this.navCtrl.setRoot(ResetPassPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  logMeIn() {
    var getUser = this.posts.username,
      getPass = this.posts.password,
      baseUrl = Config.baseUrl;

    this.http.post(baseUrl + 'api/users/login',this.posts).subscribe(res => {
      this.navCtrl.setRoot(UserLoyaltyPage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, err => {
       $('.form-login label').each(function() {
        var thisInput = $(this).find('input'),
        thisInputName = thisInput.attr('name');

        if (getUser && getPass) {
           if (thisInputName == 'username') {
             thisInput.addClass('has-error').siblings('.text-validate').text('Invalid Username.');
           } else if (thisInputName == 'password') {
             thisInput.addClass('has-error').siblings('.text-validate').text('Invalid Password.');
           }
        } else {
          if (thisInputName == 'username') {
            thisInput.addClass('has-error').siblings('.text-validate').text('Username is required.');
          } else if (thisInputName == 'password') {
            thisInput.addClass('has-error').siblings('.text-validate').text('Password is required .');
          }
        }
       });
    });
  }
}
