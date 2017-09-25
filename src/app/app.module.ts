import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { SliderPage } from '../pages/page-slider/page-slider';
import { LoginPage } from '../pages/page-login/page-login';
import { ResetPassPage } from '../pages/page-reset-pass/page-reset-pass';
import { ResetPassSuccessPage } from '../pages/page-reset-pass-success/page-reset-pass-success';
import { SignupPage } from '../pages/page-signup/page-signup';
import { SignupSuccessPage } from '../pages/page-signup-success/page-signup-success';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { UserLoyaltyPage } from '../pages/page-user-loyalty/page-user-loyalty';
import { UserFavoritesPage } from '../pages/page-user-favorites/page-user-favorites';
import { UserDealsPage } from '../pages/page-user-deals/page-user-deals';
import { UserDealsDetailsPage } from '../pages/page-user-deals-details/page-user-deals-details';
import { UserCardPage } from '../pages/page-user-card/page-user-card';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    MyApp,
    SliderPage,
    LoginPage,
    ResetPassPage,
    ResetPassSuccessPage,
    SignupPage,
    SignupSuccessPage,
    ItemDetailsPage,
    UserLoyaltyPage,
    UserFavoritesPage,
    UserDealsPage,
    UserDealsDetailsPage,
    UserCardPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SliderPage,
    LoginPage,
    ResetPassPage,
    ResetPassSuccessPage,
    SignupPage,
    SignupSuccessPage,
    ItemDetailsPage,
    UserLoyaltyPage,
    UserFavoritesPage,
    UserDealsPage,
    UserDealsDetailsPage,
    UserCardPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}
