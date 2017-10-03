webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_signup_page_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SliderPage = (function () {
    function SliderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SliderPage.prototype.signUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SliderPage.prototype.signIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SliderPage.prototype.onSlideNext = function (slider) {
        if (slider.isEnd()) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.btn-green').trigger('click');
        }
    };
    return SliderPage;
}());
SliderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slider',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-slider\page-slider.html"*/'<!-- <ion-header no-shadow>\n\n  <ion-navbar>\n\n    <button class="btn-green" (click)="signUp()">Get Started</button>\n\n    <button class="btn-green-out" (click)="signIn()">Sign In</button>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content no-bounce class="page-slider text-center">\n\n  <ion-slides pager="true" (ionSlideNextStart)="onSlideNext($event)">\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n      <img class="slider-img main-image" src="assets/images/owner-main-image.png" alt="Business Owner Main Image">\n\n      <p class="main-title">Drive Traffic &amp; Engage Your <br>Customers With The GoPage <br>Platform</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n\n\n      <img class="slider-img" src="assets/images/owner-iphone-messages.png" alt="">\n\n      <p class="subtitle">\n\n        Communicate in real time with your <br>customers. Target certain customers for <br>products or services you already know <br>they love.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n\n\n      <img class="slider-img" src="assets/images/owner-iphone-qrcode.png" alt="">\n\n      <p class="subtitle">\n\n        Our digital punch card system allows you to <br>engage and reward your loyal customers, <br>directly impacting traffic, driving sales and <br>profitability.\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="logo" src="assets/images/logo.png" alt="GoPage Logo">\n\n\n\n      <img class="slider-img" src="assets/images/owner-iphone-deals.png" alt="">\n\n      <p class="subtitle">\n\n        GoPage technology allows you to <br>easily create and deliver deals and<br> specials to customers in your area.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <button class="btn-slider btn-green" (click)="signUp()">Get Started</button>\n\n  <button class="btn-slider btn-green-out" (click)="signIn()">Sign In</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-slider\page-slider.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SliderPage);

//# sourceMappingURL=page-slider.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_reset_pass_success_page_reset_pass_success__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPassPage = (function () {
    function ResetPassPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.posts = {
            email: ''
        };
    }
    ResetPassPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    ResetPassPage.prototype.resetMe = function () {
        var _this = this;
        var getUser = this.posts.email, baseUrl = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* default */].baseUrl;
        if (getUser) {
            this.http.post(baseUrl + 'api/users/sendemail', this.posts).subscribe(function (res) {
                console.log(res);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_reset_pass_success_page_reset_pass_success__["a" /* ResetPassSuccessPage */], {}, {
                    animate: true,
                    direction: 'forward'
                });
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.form-reset label').each(function () {
                    var thisInput = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).find('input');
                    thisInput.addClass('has-error').siblings('.text-validate').text('Invalid email address. Are you sure you are registered?');
                });
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.form-reset label').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).find('input');
                thisInput.addClass('has-error').siblings('.text-validate').text('Email address is required.');
            });
        }
    };
    return ResetPassPage;
}());
ResetPassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-pass',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-reset-pass\page-reset-pass.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Reset Password\n\n  </p>\n\n  <form class="form-reset">\n\n    <label><input type="email" name="email" placeholder="Email address" [(ngModel)]="posts.email" /><span class="text-validate">Email address is required.</span></label>\n\n    <input class="btn-green" type="submit" value="Send" (click)="resetMe()" />\n\n  </form>\n\n  <p class="description text-center">We\'ll email you a link to reset your password<p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-reset-pass\page-reset-pass.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], ResetPassPage);

//# sourceMappingURL=page-reset-pass.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_signup_page_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_login_page_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupSuccessPage = (function () {
    function SignupSuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupSuccessPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupSuccessPage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    return SignupSuccessPage;
}());
SignupSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup-success',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-signup-success\page-signup-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Sign Up Success\n\n  </p>\n\n  <p class="description text-center">We’ve just emailed you a link. <br>Please check your inbox and confirm your email<p>\n\n  <a class="btn btn-green text-center" (click)="goLogin()">Okay</a>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-signup-success\page-signup-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SignupSuccessPage);

//# sourceMappingURL=page-signup-success.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_inbox_page_user_inbox__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_add_customer_page_user_add_customer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserCustomersPage = (function () {
    function UserCustomersPage(navCtrl, navParams, http, storage, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.api = api;
        this.hasData = false;
    }
    UserCustomersPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserCustomersPage.prototype.goInbox = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    UserCustomersPage.prototype.dateFormat = function (value) {
        var dateNow = __WEBPACK_IMPORTED_MODULE_9_moment___default()(value), format = dateNow.format('MMM D YYYY at h:mm A'), newDateNow = new Date(value), getYear = newDateNow.getFullYear();
        format = format.replace("amt", "at");
        format = format.replace("pmt", "at");
        if (getYear == 1970) {
            return '-';
        }
        else {
            return format;
        }
    };
    UserCustomersPage.prototype.toggleAccordion = function ($event) {
        var thisElem = __WEBPACK_IMPORTED_MODULE_6_jquery__($event.currentTarget).closest('.holder-accordion');
        __WEBPACK_IMPORTED_MODULE_6_jquery__(thisElem).toggleClass('show').siblings('.holder-accordion').removeClass('show');
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.dropdown-menu').fadeOut('150');
    };
    UserCustomersPage.prototype.showDropdown = function ($event) {
        var thisElem = __WEBPACK_IMPORTED_MODULE_6_jquery__($event.currentTarget).find('.dropdown-menu'), thisIndex = thisElem.closest('.holder-accordion').index();
        this.customerId = this.customersList[thisIndex]._id;
        this.thisFName = this.customersList[thisIndex].first_name,
            this.thisLName = this.customersList[thisIndex].last_name;
        this.getName(this.thisFName, this.thisLName);
        __WEBPACK_IMPORTED_MODULE_6_jquery__(thisElem).fadeToggle('150');
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.dropdown-menu').not(thisElem).hide();
    };
    UserCustomersPage.prototype.getName = function (fName, lName) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.name').text(fName + ' ' + lName + '\'s');
    };
    UserCustomersPage.prototype.updateModal = function (modalName) {
        this.openModal('#' + modalName + '-modal');
    };
    UserCustomersPage.prototype.updateThis = function (updateType) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#btn-' + updateType).append('<span class="fa fa-spinner fa-spin"></span>');
        if (updateType == 'delete') {
            this.api.Users.user_delete(this.customerId).then(function (res) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#btn-delete').find('.fa-spin').remove();
                _this.closeModal();
                _this.ionViewWillEnter();
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.success').text('deleted');
                _this.openModal('#success-modal');
            });
        }
        else if (updateType == 'suspend') {
            this.api.Users.user_suspend(this.customerId).then(function (res) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#btn-suspend').find('.fa-spin').remove();
                _this.closeModal();
                _this.ionViewWillEnter();
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.success').text('suspended');
                _this.openModal('#success-modal');
            });
        }
    };
    UserCustomersPage.prototype.openModal = function (modal) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(modal).fadeIn('150');
    };
    UserCustomersPage.prototype.closeModal = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.confirmation-modal').fadeOut('150');
    };
    UserCustomersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            _this.user = user;
            _this.api.Users.user_list(user._id, user.permission, user.account_type).then(function (users) {
                _this.customersList = users;
                _this.hasData = true;
                __WEBPACK_IMPORTED_MODULE_6_jquery__('body').find('.fa.loader').remove();
            });
        });
    };
    UserCustomersPage.prototype.goAddUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_user_add_customer_page_user_add_customer__["a" /* UserAddCustomerPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    return UserCustomersPage;
}());
UserCustomersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-customers',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-customers\page-user-customers.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox" (click)="goInbox()"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="page-user-customers">\n\n  <p class="title">\n\n    <!-- <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()"> -->\n\n    Customers\n\n    <a class="btn btn-green" href="#" (click)="goAddUser()">Add New</a>\n\n  </p>\n\n  <p class="description">\n\n    Show <input type="number" name="entry" value="10"/> entries\n\n  </p>\n\n  <span class="fa fa-spinner fa-spin loader"></span>\n\n  <div class="holder-list" *ngIf="hasData">\n\n    <div class="holder-accordion" *ngFor="let customer of customersList">\n\n      <span class="dropdown" (click)="showDropdown($event)">\n\n        Actions <span class="fa fa-angle-down"></span>\n\n        <ul class="dropdown-menu">\n\n          <li>Edit</li>\n\n          <li (click)="updateModal(\'suspend\')" *ngIf="customer.status !== \'2\'">Suspend</li>\n\n          <li (click)="updateModal(\'delete\')" *ngIf="customer.status !== \'0\'">Delete</li>\n\n        </ul>\n\n      </span>\n\n      <div class="accordion-header" (click)="toggleAccordion($event)">\n\n        {{customer.first_name}} {{customer.last_name}}\n\n      </div>\n\n      <div class="accordion-body">\n\n        <span class="list-label">Role</span><span class="list-data">{{customer.permission === \'1\' ? \'Administrator\' : customer.permission === \'2\' ? \'Ambassador\' : \'Member\'}}</span>\n\n        <span class="list-label">Account Type</span><span class="list-data">{{customer.account_type === \'1\' ? \'Member\' : customer.account_type === \'2\' ? \'Business-Essentials\' : \'Premium\'}}</span>\n\n        <span class="list-label">Status</span><span class="list-data"><span *ngIf="customer.status == \'1\'">Active</span><span class="not-active" *ngIf="customer.status != \'1\'">{{customer.status === \'0\' ? \'Deleted\' : \'Suspended\'}}</span></span>\n\n        <span class="list-label">Registered Date</span><span class="list-data">{{dateFormat(customer.created_at)}}</span>\n\n        <span class="list-label">Last Login</span><span class="list-data">{{dateFormat(customer.last_login)}}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<div id="suspend-modal" class="confirmation-modal">\n\n  <div class="confirmation-modal-overlay" (click)="closeModal()"></div>\n\n  <div class="confirmation-modal-content">\n\n    Are you sure you want to suspend <span class="name"></span> account?\n\n    <button id="btn-suspend" class="btn btn-green" (click)="updateThis(\'suspend\')">Yes</button>\n\n    <button class="btn btn-gray" (click)="closeModal()">No</button>\n\n  </div>\n\n</div>\n\n\n\n<div id="delete-modal" class="confirmation-modal">\n\n  <div class="confirmation-modal-overlay" (click)="closeModal()"></div>\n\n  <div class="confirmation-modal-content">\n\n    Are you sure you want to delete <span class="name"></span> account?\n\n    <button id="btn-delete" class="btn btn-green" (click)="updateThis(\'delete\')">Yes</button>\n\n    <button class="btn btn-gray" (click)="closeModal()">No</button>\n\n  </div>\n\n</div>\n\n\n\n<div id="success-modal" class="confirmation-modal">\n\n  <div class="confirmation-modal-overlay" (click)="closeModal()"></div>\n\n  <div class="confirmation-modal-content">\n\n    Account has been successfully <span class="success"></span>.\n\n\n\n    <button class="btn btn-green btn-okay" (click)="closeModal()">Okay</button>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-customers\page-user-customers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__["a" /* ApiService */]])
], UserCustomersPage);

//# sourceMappingURL=page-user-customers.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAddCustomerPage = (function () {
    function UserAddCustomerPage(navCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.posts = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            password: ''
        };
    }
    UserAddCustomerPage.prototype.goBack = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#added-modal').hide();
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    UserAddCustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            _this.id = user._id;
        });
    };
    UserAddCustomerPage.prototype.addUser = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#add-user').append('<span class="fa fa-spinner fa-spin"></span>');
        this.api.Users.user_add(this.posts.first_name, this.posts.last_name, '+' + this.posts.phone, this.posts.email, this.posts.password, this.id).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#add-user').find('.fa-spin').remove();
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#added-modal').fadeIn('250');
        });
    };
    return UserAddCustomerPage;
}());
UserAddCustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-add-customer',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-add-customer\page-user-add-customer.html"*/'<ion-content padding>\n\n  <p class="title">\n\n    Add New User\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n\n\n  <form>\n\n    <label><input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" /><span class="text-validate"></span></label>\n\n    <label><input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" /><span class="text-validate"></span></label>\n\n    <label><input type="number" name="number" placeholder="Mobile number" [(ngModel)]="posts.phone" /><span class="text-validate"></span></label>\n\n    <label><input type="text" name="email" placeholder="E-mail address" [(ngModel)]="posts.email" /><span class="text-validate"></span></label>\n\n    <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /><span class="btn-show">SHOW</span><span class="text-validate"></span></label>\n\n    <button id="add-user" class="btn btn-green" type="submit" (click)="addUser()">Save</button>\n\n  </form>\n\n</ion-content>\n\n\n\n<div id="added-modal" class="confirmation-modal">\n\n  <div class="confirmation-modal-overlay"></div>\n\n  <div class="confirmation-modal-content">\n\n    Account has been successfully added.\n\n    <button class="btn btn-green btn-okay" (click)="goBack()">Okay</button>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-add-customer\page-user-add-customer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__service_api_service_component__["a" /* ApiService */]])
], UserAddCustomerPage);

//# sourceMappingURL=page-user-add-customer.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_register_page_user_register__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_inbox_page_user_inbox__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_api_service_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserScannerPage = (function () {
    function UserScannerPage(navCtrl, navParams, barcodeScanner, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.api = api;
        this.storage = storage;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.hasData = false;
    }
    UserScannerPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserScannerPage.prototype.goInbox = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    UserScannerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            _this.user = user;
            _this.hasData = true;
        });
    };
    UserScannerPage.prototype.SubmitNumber = function () {
        var _this = this;
        var mobileRegex = /^[0-9]{3,14}$/;
        if (this.phone) {
            console.log(mobileRegex.test(this.phone));
            if (mobileRegex.test(this.phone) == true) {
                this.phone = "+" + this.phone;
                __WEBPACK_IMPORTED_MODULE_6_jquery__('input[name="number"]').removeClass('has-error').siblings('.text-validate').text('');
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.btn-orange[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
                this.storage.get('user').then(function (user) {
                    _this.user = user;
                    _this.api.Business.checker(_this.phone, user._id).then(function (customer) {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('.btn-orange[type="submit"]').find('.fa-spinner').remove();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business_id: user.shop_id[0], customer: customer }, {
                            animate: true,
                            direction: 'forward'
                        });
                    }).catch(function (err) {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('.btn-orange[type="submit"]').find('.fa-spinner').remove();
                        var exist = JSON.parse(err['_body']).exist;
                        if (exist == 0) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_user_register_page_user_register__["a" /* UserRegisterPage */], { phone: _this.phone }, {
                                animate: true,
                                direction: 'forward'
                            });
                        }
                    });
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('input[name="number"]').addClass('has-error').siblings('.text-validate').text('Mobile number is invalid.');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('input[name="number"]').addClass('has-error').siblings('.text-validate').text('Mobile number is required.');
        }
    };
    UserScannerPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // this.createdCode = barcodeData
            _this.createdCode = JSON.parse(barcodeData.text);
            _this.storage.get("user").then(function (user) {
                _this.api.Business.scan_qr(_this.createdCode.MembershipNumber, user._id, user.shop_id[0]).then(function (customer) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business_id: user.shop_id[0], customer: customer }, {
                        animate: true,
                        direction: 'forward'
                    });
                })
                    .catch(function (err) {
                    this.message = 'Invalid membership code';
                });
            });
        });
    };
    return UserScannerPage;
}());
UserScannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-scanner',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-scanner\page-user-scanner.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox" (click)="goInbox()"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <a class="btn btn-green" (click)="scanCode()">Scan QR Code</a>\n\n  <span>{{message}}</span>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n  <form class="form-mobile">\n\n    <label>\n\n      <input type="number" [(ngModel)]="phone" name="number" placeholder="Mobile number" />\n\n      <span class="text-validate"></span>\n\n\n\n    </label>\n\n    <button class="btn btn-orange" (click)="SubmitNumber()" type="submit">Submit</button>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-scanner\page-user-scanner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_7__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
], UserScannerPage);

//# sourceMappingURL=page-user-scanner.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_inbox_page_user_inbox__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserRegisterPage = (function () {
    function UserRegisterPage(navCtrl, navParams, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.posts = {
            first_name: '',
            last_name: ''
        };
        this.phone = navParams.get('phone');
    }
    UserRegisterPage.prototype.goScanner = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserRegisterPage.prototype.goInbox = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    UserRegisterPage.prototype.registerMe = function () {
        var _this = this;
        var getFName = this.posts.first_name, getLName = this.posts.last_name, nameRegEx = /^(([A-Za-z]+[\-\']?)*([A-Za-z\s]+)?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
        if (getFName && getLName) {
            if (nameRegEx.test(getFName) == true && nameRegEx.test(getLName) == true) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('form input').removeClass('has-error').siblings('.text-validate').text('');
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
                this.storage.get('user').then(function (user) {
                    _this.user = user;
                    _this.api.Business.register(_this.phone, user.shop_id[0], getFName, getLName).then(function (customer) {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                        console.log(customer);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__["a" /* UserDealsPage */], { business_id: user.shop_id[0], customer: customer }, {
                            animate: true,
                            direction: 'forward'
                        });
                    }).catch(function (err) {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                        // console.log(err);
                    });
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('form input').each(function () {
                    var thisInput = __WEBPACK_IMPORTED_MODULE_6_jquery__(this), thisPlaceholder = thisInput.attr('placeholder'), thisVal = thisInput.val();
                    if (nameRegEx.test(thisVal) == true) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Invalid ' + thisPlaceholder + '.');
                    }
                });
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('form input').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_6_jquery__(this), thisPlaceholder = thisInput.attr('placeholder'), thisVal = thisInput.val();
                if (thisVal.length > 0) {
                    thisInput.removeClass('has-error').siblings('.text-validate').text();
                }
                else {
                    thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is required.');
                }
            });
        }
    };
    return UserRegisterPage;
}());
UserRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-register',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-register\page-user-register.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox" (click)="goInbox()"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <p class="title" (click)="goScanner()">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" />\n\n    Back to Scanner\n\n  </p>\n\n\n\n  <form>\n\n    <label>\n\n      <input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" />\n\n      <span class="text-validate"></span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" />\n\n      <span class="text-validate"></span>\n\n    </label>\n\n    <button class="btn btn-green" type="submit" (click)="registerMe()">Submit</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-register\page-user-register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], UserRegisterPage);

//# sourceMappingURL=page-user-register.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRedeemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_inbox_page_user_inbox__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserRedeemPage = (function () {
    function UserRedeemPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.hasData = false;
    }
    UserRedeemPage.prototype.ionViewWillEnter = function () {
        this.business_id = this.navParams.get('business_id');
        this.customer_id = this.navParams.get('customer_id');
        this.deal = this.navParams.get('deal');
        this.hasData = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.title-deal').text(this.deal.template);
    };
    UserRedeemPage.prototype.ionViewDidLoad = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('input[name="quantity"]').focus();
        }, 1000);
    };
    UserRedeemPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    UserRedeemPage.prototype.goBack = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    UserRedeemPage.prototype.goScanner = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.confirmation-modal').hide();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserRedeemPage.prototype.goInbox = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    UserRedeemPage.prototype.Submit = function () {
        var _this = this;
        var getTitle = this.deal.template, getBuyPcs = this.deal.buy_pcs, getBuyProd = this.deal.buy_product, getFreePcs = this.deal.get_pcs, getFreeProd = this.deal.get_product == '' ? getBuyProd : this.deal.get_product;
        if (this.quantity) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#btn-submit').append('<span class="fa fa-spinner fa-spin"></span>');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('input[type="number"]').removeClass('has-error').next('.text-validate').text('');
            this.api.Loyalty.loyalty_add(this.quantity, this.business_id, this.deal._id, this.customer_id)
                .then(function (data) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#btn-submit').find('.fa').remove();
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.free-pcs').text(getFreePcs);
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.free-prod').text(getFreeProd);
                if (parseInt(data.loyalty_details.stamp) >= parseInt(getBuyPcs)) {
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('#complete-modal').fadeIn(250);
                }
                else {
                    var stampsLeft = parseInt(getBuyPcs) - parseInt(data.loyalty_details.stamp);
                    stampsLeft == 1 ?
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('.stamps-left').text(stampsLeft + ' stamp') :
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('.stamps-left').text(stampsLeft + ' stamps');
                    _this.quantity == 1 ?
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('.stamps-added').text(_this.quantity + ' stamp') :
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('.stamps-added').text(_this.quantity + ' stamps');
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('#added-modal').fadeIn(250);
                }
            })
                .catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#btn-submit').find('.fa').remove();
                console.log(error);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('input[type="number"]').addClass('has-error').next('.text-validate').text('Quantity must be greater than 0');
        }
    };
    return UserRedeemPage;
}());
UserRedeemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-redeem',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-redeem\page-user-redeem.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n    <a class="inbox" (click)="goInbox()"><img src="assets/images/icon-mail.png" alt="" /><span class="count-msg">1</span></a>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <p class="title" (click)="goBack()">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" />\n\n    Back to Deals\n\n  </p>\n\n\n\n  <div>\n\n    <p class="title-deal"></p>\n\n		<form>\n\n			<label>\n\n        <!-- <ion-input type="number" name="quantity" placeholder="Enter Quantity" [(ngModel)]="quantity" [ngModelOptions]="{standalone: true}" autofocus></ion-input> -->\n\n        <input type="number" name="quantity" placeholder="Enter Quantity" [(ngModel)]="quantity" [ngModelOptions]="{standalone: true}">\n\n        <span class="text-validate"></span>\n\n      </label>\n\n			<button id="btn-submit" (click)="Submit()" class="btn btn-green">Submit</button>\n\n		</form>\n\n	</div>\n\n</ion-content>\n\n\n\n<div id="complete-modal" class="confirmation-modal">\n\n  <div class="confirmation-modal-overlay"></div>\n\n  <div class="confirmation-modal-content">\n\n    <span class="fa fa-check"></span>\n\n    CONGRATULATIONS<br />\n\n    YOU\'VE EARNED <span class="free-pcs"></span> FREE <span class="free-prod"></span>\n\n    <button class="btn btn-green" (click)="goScanner()">Complete</button>\n\n  </div>\n\n</div>\n\n\n\n<div id="added-modal" class="confirmation-modal">\n\n  <div class="confirmation-modal-overlay"></div>\n\n  <div class="confirmation-modal-content">\n\n    <span class="fa fa-check"></span>\n\n    CONGRATULATIONS<br />\n\n    YOU\'VE ADDED <span class="stamps-added"></span>.<br />\n\n    <span class="stamps-left"></span> LEFT TO CLAIM YOUR REWARD/S.\n\n    <button class="btn btn-green" (click)="goScanner()">Complete</button>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-redeem\page-user-redeem.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_api_service_component__["a" /* ApiService */]) === "function" && _c || Object])
], UserRedeemPage);

var _a, _b, _c;
//# sourceMappingURL=page-user-redeem.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_reset_pass_page_reset_pass__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_login_page_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPassSuccessPage = (function () {
    function ResetPassSuccessPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResetPassSuccessPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_reset_pass_page_reset_pass__["a" /* ResetPassPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    ResetPassSuccessPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    return ResetPassSuccessPage;
}());
ResetPassSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-pass-success',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-reset-pass-success\page-reset-pass-success.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n    Reset Password Success\n\n  </p>\n\n  <p class="description text-center">You should receive an email from us shortly. <br>We’ll meet you back here.<p>\n\n  <a class="btn btn-green text-center" (click)="goHome()">Back to Login</a>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-reset-pass-success\page-reset-pass-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ResetPassSuccessPage);

//# sourceMappingURL=page-reset-pass-success.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    return ItemDetailsPage;
}());
ItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-details',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\item-details\item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_card_page_user_card__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserFavoritesPage = UserFavoritesPage_1 = (function () {
    function UserFavoritesPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        platform.ready().then(function () {
            var addActive = function () {
                if (__WEBPACK_IMPORTED_MODULE_6_jquery__('.label-favorites').length > 0) {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('.label-favorites').addClass('active');
                    clearInterval(_interval);
                }
            }, _interval = setInterval(addActive, 1);
        });
        this.pages = [
            { title: 'loyalty', component: __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */] },
            { title: 'favorites', component: UserFavoritesPage_1 },
            { title: 'find deals', component: __WEBPACK_IMPORTED_MODULE_4__page_user_deals_page_user_deals__["a" /* UserDealsPage */] },
            { title: 'card', component: __WEBPACK_IMPORTED_MODULE_5__page_user_card_page_user_card__["a" /* UserCardPage */] }
        ];
    }
    UserFavoritesPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserFavoritesPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    return UserFavoritesPage;
}());
UserFavoritesPage = UserFavoritesPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-favorites',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-favorites\page-user-favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo.png" alt="">\n\n    <div class="profile">\n\n      <img class="profile-img" src="assets/images/img-profile.png" alt="">\n\n      <span class="fa fa-angle-down"></span>\n\n    </div>\n\n    <span class="inbox fa fa-envelope-o"><span class="count-msg">1</span></span>\n\n  </ion-navbar>\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <span class="label-{{p.title}}">{{p.title}}</span>\n\n    </button>\n\n  </ion-list>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class="title">\n\n    Favorites Page\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-favorites\page-user-favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], UserFavoritesPage);

var UserFavoritesPage_1;
//# sourceMappingURL=page-user-favorites.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_favorites_page_user_favorites__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_deals_page_user_deals__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserCardPage = UserCardPage_1 = (function () {
    function UserCardPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        platform.ready().then(function () {
            var addActive = function () {
                if (__WEBPACK_IMPORTED_MODULE_6_jquery__('.label-card').length > 0) {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('.label-card').addClass('active');
                    clearInterval(_interval);
                }
            }, _interval = setInterval(addActive, 1);
        });
        this.pages = [
            { title: 'loyalty', component: __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */] },
            { title: 'favorites', component: __WEBPACK_IMPORTED_MODULE_4__page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */] },
            { title: 'find deals', component: __WEBPACK_IMPORTED_MODULE_5__page_user_deals_page_user_deals__["a" /* UserDealsPage */] },
            { title: 'card', component: UserCardPage_1 }
        ];
    }
    UserCardPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserCardPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    return UserCardPage;
}());
UserCardPage = UserCardPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-card',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-card\page-user-card.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo.png" alt="">\n\n    <div class="profile">\n\n      <img class="profile-img" src="assets/images/img-profile.png" alt="">\n\n      <span class="fa fa-angle-down"></span>\n\n    </div>\n\n    <span class="inbox fa fa-envelope-o"><span class="count-msg">1</span></span>\n\n  </ion-navbar>\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <span class="label-{{p.title}}">{{p.title}}</span>\n\n    </button>\n\n  </ion-list>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class="title">\n\n    Cards Page\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-card\page-user-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], UserCardPage);

var UserCardPage_1;
//# sourceMappingURL=page-user-card.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(405);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_success_page_signup_success__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_page_menu_page_menu__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_item_details_item_details__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_page_user_register_page_user_register__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_user_customers_page_user_customers__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_page_user_inbox_page_user_inbox__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_page_user_favorites_page_user_favorites__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_page_user_deals_page_user_deals__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_page_user_deals_details_page_user_deals_details__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_page_user_card_page_user_card__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_page_user_redeem_page_user_redeem__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_page_user_add_customer_page_user_add_customer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_list_list__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_screen_orientation__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_qrcode2__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_api_service_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__["a" /* ResetPassPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__["a" /* ResetPassSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_success_page_signup_success__["a" /* SignupSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_page_menu_page_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_page_user_scanner_page_user_scanner__["a" /* UserScannerPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_page_user_register_page_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_page_user_customers_page_user_customers__["a" /* UserCustomersPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_page_user_inbox_page_user_inbox__["a" /* UserInboxPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_page_user_deals_page_user_deals__["a" /* UserDealsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_page_user_deals_details_page_user_deals_details__["a" /* UserDealsDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_page_user_card_page_user_card__["a" /* UserCardPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_page_user_redeem_page_user_redeem__["a" /* UserRedeemPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_page_user_add_customer_page_user_add_customer__["a" /* UserAddCustomerPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_32__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_qrcode2__["a" /* NgxQRCodeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_page_slider_page_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_page_login_page_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_page_reset_pass_page_reset_pass__["a" /* ResetPassPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_page_reset_pass_success_page_reset_pass_success__["a" /* ResetPassSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_signup_page_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_page_signup_success_page_signup_success__["a" /* SignupSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_page_menu_page_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_page_user_scanner_page_user_scanner__["a" /* UserScannerPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_page_user_register_page_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_page_user_customers_page_user_customers__["a" /* UserCustomersPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_page_user_inbox_page_user_inbox__["a" /* UserInboxPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_page_user_favorites_page_user_favorites__["a" /* UserFavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_page_user_deals_page_user_deals__["a" /* UserDealsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_page_user_deals_details_page_user_deals_details__["a" /* UserDealsDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_page_user_card_page_user_card__["a" /* UserCardPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_page_user_redeem_page_user_redeem__["a" /* UserRedeemPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_page_user_add_customer_page_user_add_customer__["a" /* UserAddCustomerPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_31__service_api_service_component__["a" /* ApiService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_reset_pass_page_reset_pass__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginPage = (function () {
    function LoginPage(navCtrl, http, fb, gp, storage, api) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.gp = gp;
        this.storage = storage;
        this.api = api;
        this.posts = {
            username: '',
            password: ''
        };
    }
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_signup_page_signup__["a" /* SignupPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    LoginPage.prototype.fbConnect = function () {
        var _this = this;
        var baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl;
        this.fb.login(['email', 'public_profile']).then(function (res) {
            _this.fb.api('me?fields=id,email', []).then(function (profile) {
                _this.http.post(baseUrl + 'api/users/login', { email: profile['email'], is_social: '1', permission: '4' }).subscribe(function (res) {
                    _this.getUser(res.json());
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log('Error logging into Facebook', err);
        });
    };
    LoginPage.prototype.gpConnect = function () {
        this.gp.login({})
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log('error -- ' + err); });
    };
    LoginPage.prototype.goReset = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_reset_pass_page_reset_pass__["a" /* ResetPassPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    LoginPage.prototype.logMeIn = function () {
        var _this = this;
        var getUser = this.posts.username, getPass = this.posts.password, baseUrl = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].baseUrl;
        if (__WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').length == 0) {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').append('<span class="fa fa-spinner fa-spin"></span>');
        }
        if (getUser && getPass) {
            this.http.post(baseUrl + 'api/users/login', this.posts).subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                _this.getUser(res.json());
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
                __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-login label').each(function () {
                    var thisInput = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('input'), thisInputName = thisInput.attr('name'), thisPlaceholder = thisInput.attr('placeholder');
                    if (thisInputName == 'username') {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Invalid ' + thisPlaceholder);
                    }
                    else if (thisInputName == 'password') {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Invalid Password.');
                    }
                });
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.btn-green[type="submit"]').find('.fa-spinner').remove();
            __WEBPACK_IMPORTED_MODULE_10_jquery__('.form-login label').each(function () {
                var thisInput = __WEBPACK_IMPORTED_MODULE_10_jquery__(this).find('input'), thisInputName = thisInput.attr('name'), thisPlaceholder = thisInput.attr('placeholder');
                if (thisInputName == 'username') {
                    if (getUser) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text(thisPlaceholder + ' is required.');
                    }
                }
                else {
                    if (getPass) {
                        thisInput.removeClass('has-error').siblings('.text-validate').text();
                    }
                    else {
                        thisInput.addClass('has-error').siblings('.text-validate').text('Password is required .');
                    }
                }
            });
        }
    };
    LoginPage.prototype.getUser = function (token) {
        var _this = this;
        this.api.Users.user(token.user_id).then(function (user) {
            _this.storage.set('user', user);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */], {}, {
                animate: true,
                direction: 'forward'
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-login\page-login.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card>\n\n\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goSignup()">\n\n    Welcome Back\n\n  </p>\n\n  <button class="btn login-fb" (click)="fbConnect()"><span class="fa fa-facebook"></span> Continue with Facebook</button>\n\n  <button class="btn login-google" (click)="gpConnect()"><span class="fa fa-google"></span> Continue with Google</button>\n\n  <div class="divider">\n\n    <span>or</span>\n\n  </div>\n\n  <form class="form-login">\n\n    <label><input type="email" name="username" placeholder="Email or Phone" [(ngModel)]="posts.username" /><span class="text-validate">Email address is required.</span></label>\n\n    <label><input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" /><span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span></label>\n\n    <button class="btn-green" type="submit" (click)="logMeIn()">Log In</button>\n\n  </form>\n\n  <a class="description forgot-pass" (click)="goReset()">Forgot your password?</a>\n\n  <hr class="hr" />\n\n  <p class="description">Don\'t have an account? <a href="#" (click)="goSignup()">Sign Up</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-login\page-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__service_api_service_component__["a" /* ApiService */]])
], LoginPage);

//# sourceMappingURL=page-login.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        var _this = this;
        this.http = http;
        this.Users = {
            user: function (userId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/users/view/" + userId).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            user_list: function (userId, permission, account_type) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/users/list2/" + userId + "/" + permission + "?account_type=" + account_type).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            user_delete: function (userId) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/users/delete/" + userId, {}).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            user_suspend: function (userId) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/users/edit/" + userId, { status: '2' }).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            user_add: function (firstName, lastName, phone, email, password, ownerId) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/users/add/", { first_name: firstName, last_name: lastName, number: phone, email: email, password: password, permission: '3', account_type: '1', status: '1', owner_id: ownerId }).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Business = {
            checker: function (phone, userId) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/business/check_phone/" + phone + "/" + userId, {}).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            register: function (phone, businessId, first_name, last_name) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/business/send_sms/" + phone + "/" + businessId, { first_name: first_name, last_name: last_name }).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            scan_qr: function (MembershipNumber, userId, businessId) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/business/qr_scan/" + MembershipNumber + "/" + userId + "/" + businessId, {}).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Deals = {
            deals_list: function (businessId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/deals/list/" + businessId + '/2').map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
        this.Loyalty = {
            loyalty_list: function (businessId, customerId) {
                return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/loyalties/list/" + customerId + '/' + businessId).map(function (response) {
                    return response.json();
                }).toPromise();
            },
            loyalty_add: function (quantity, businessId, dealId, customerId) {
                return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].baseUrl + "api/loyalties/add/" + quantity, {
                    business_id: businessId,
                    customer_id: customerId,
                    deals_id: dealId
                }).map(function (response) {
                    return response.json();
                }).toPromise();
            }
        };
    }
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiService);

//# sourceMappingURL=api.service.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_page_slider_page_slider__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, screenOrientation) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.screenOrientation = screenOrientation;
        // make SliderPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_page_slider_page_slider__["a" /* SliderPage */];
        platform.ready().then(function () {
            _this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
        });
        this.initializeApp();
        // set our app's pages
        // this.pages = [
        //   { title: 'Scanner', component: UserScannerPage }
        // ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('nav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\app\app.html"*/'<ion-nav #nav [root]="rootPage"></ion-nav>\n\n\n\n<!-- <ion-menu [content]="nav">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu> -->\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInboxPage = (function () {
    function UserInboxPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserInboxPage.prototype.showMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_menu_page_menu__["a" /* MenuPage */], {
            animate: true,
            direction: 'forward'
        });
    };
    return UserInboxPage;
}());
UserInboxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-inbox',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-inbox\page-user-inbox.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo-min.png" alt="">\n\n    <div class="holder-menu" (click)="showMenu()">Menu</div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class="title">\n\n    <!-- <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()"> -->\n\n    Inbox Page\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-inbox\page-user-inbox.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], UserInboxPage);

//# sourceMappingURL=page-user-inbox.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_redeem_page_user_redeem__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDealsPage = (function () {
    function UserDealsPage(navCtrl, navParams, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.hasData = false;
        this.business_id = navParams.get('business_id');
        this.customer = navParams.get('customer');
    }
    UserDealsPage.prototype.goScanner = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    UserDealsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // console.log(this.customer)
        this.api.Loyalty.loyalty_list(this.business_id, this.customer.customer.user_id[0]).then(function (users) {
            _this.dealsList = users;
            // console.log(this.dealsList)
            _this.hasData = true;
        });
    };
    UserDealsPage.prototype.dateFormat = function (value) {
        var dateNow = __WEBPACK_IMPORTED_MODULE_6_moment___default()(value), format = dateNow.format('MMM/D/YYYY'), newDateNow = new Date(value), getYear = newDateNow.getFullYear();
        format = format.replace("amt", "at");
        format = format.replace("pmt", "at");
        if (getYear == 1970) {
            return '-';
        }
        else {
            return format;
        }
    };
    UserDealsPage.prototype.Redeem = function (deal) {
        console.log(this.customer.customer.user_id[0]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_user_redeem_page_user_redeem__["a" /* UserRedeemPage */], {
            deal: deal,
            business_id: this.business_id,
            customer_id: this.customer.customer.user_id[0]
        }, {
            animate: true,
            direction: 'forward'
        });
    };
    return UserDealsPage;
}());
UserDealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-deals',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-deals\page-user-deals.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <img class="header-logo" src="assets/images/logo.png" alt="">\n\n    <div class="profile">\n\n      <img class="profile-img" src="assets/images/img-profile.png" alt="">\n\n      <span class="fa fa-angle-down"></span>\n\n    </div>\n\n    <span class="inbox fa fa-envelope-o"><span class="count-msg">1</span></span>\n\n  </ion-navbar>\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <span class="label-{{p.title}}">{{p.title}}</span>\n\n    </button>\n\n  </ion-list>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <p class="title" (click)="goScanner()">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" />\n\n    Back to Scanner\n\n  </p>\n\n\n\n  <div class="holder-list" *ngIf="hasData">\n\n    <div class="holder-deal" *ngFor="let deals of dealsList">\n\n      <div class="deal-info">\n\n        <p class="deal-title">\n\n           {{deals.template}}\n\n        </p>\n\n        <p class="deal-stamp">\n\n          {{deals.stamp}} stamp\n\n        </p>\n\n        <p class="deal-expire">\n\n          Expires {{dateFormat(deals.end_date)}}\n\n        </p>\n\n      </div>\n\n      <button (click)="Redeem(deals)" class="btn btn-green">Stamp</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-deals\page-user-deals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_api_service_component__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], UserDealsPage);

//# sourceMappingURL=page-user-deals.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_login_page_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_user_customers_page_user_customers__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_user_inbox_page_user_inbox__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pages = [
            { title: 'scanner', component: __WEBPACK_IMPORTED_MODULE_3__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */] },
            { title: 'customers', component: __WEBPACK_IMPORTED_MODULE_4__page_user_customers_page_user_customers__["a" /* UserCustomersPage */] },
            { title: 'inbox', component: __WEBPACK_IMPORTED_MODULE_5__page_user_inbox_page_user_inbox__["a" /* UserInboxPage */] }
        ];
    }
    MenuPage.prototype.goBack = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back'
        });
    };
    MenuPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component, {}, {
            animate: true,
            direction: 'back'
        });
    };
    MenuPage.prototype.logOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_login_page_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-menu\page-menu.html"*/'<ion-content padding class="content-page-menu">\n\n  <p class="title">\n\n    <img class="btn-nav to-right" src="assets/icon/icon-close.png" alt="" (click)="goBack()">\n\n  </p>\n\n\n\n  <ion-list class="menu-list">\n\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <span class="label-{{p.title}}">{{p.title}}</span>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <hr class="divider" />\n\n  <a class="logout" href="#" (click)="logOut()">Logout</a>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-menu\page-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MenuPage);

//# sourceMappingURL=page-menu.js.map

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 271,
	"./af.js": 271,
	"./ar": 272,
	"./ar-dz": 273,
	"./ar-dz.js": 273,
	"./ar-kw": 274,
	"./ar-kw.js": 274,
	"./ar-ly": 275,
	"./ar-ly.js": 275,
	"./ar-ma": 276,
	"./ar-ma.js": 276,
	"./ar-sa": 277,
	"./ar-sa.js": 277,
	"./ar-tn": 278,
	"./ar-tn.js": 278,
	"./ar.js": 272,
	"./az": 279,
	"./az.js": 279,
	"./be": 280,
	"./be.js": 280,
	"./bg": 281,
	"./bg.js": 281,
	"./bn": 282,
	"./bn.js": 282,
	"./bo": 283,
	"./bo.js": 283,
	"./br": 284,
	"./br.js": 284,
	"./bs": 285,
	"./bs.js": 285,
	"./ca": 286,
	"./ca.js": 286,
	"./cs": 287,
	"./cs.js": 287,
	"./cv": 288,
	"./cv.js": 288,
	"./cy": 289,
	"./cy.js": 289,
	"./da": 290,
	"./da.js": 290,
	"./de": 291,
	"./de-at": 292,
	"./de-at.js": 292,
	"./de-ch": 293,
	"./de-ch.js": 293,
	"./de.js": 291,
	"./dv": 294,
	"./dv.js": 294,
	"./el": 295,
	"./el.js": 295,
	"./en-au": 296,
	"./en-au.js": 296,
	"./en-ca": 297,
	"./en-ca.js": 297,
	"./en-gb": 298,
	"./en-gb.js": 298,
	"./en-ie": 299,
	"./en-ie.js": 299,
	"./en-nz": 300,
	"./en-nz.js": 300,
	"./eo": 301,
	"./eo.js": 301,
	"./es": 302,
	"./es-do": 303,
	"./es-do.js": 303,
	"./es.js": 302,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./gd": 313,
	"./gd.js": 313,
	"./gl": 314,
	"./gl.js": 314,
	"./gom-latn": 315,
	"./gom-latn.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it.js": 323,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mr": 340,
	"./mr.js": 340,
	"./ms": 341,
	"./ms-my": 342,
	"./ms-my.js": 342,
	"./ms.js": 341,
	"./my": 343,
	"./my.js": 343,
	"./nb": 344,
	"./nb.js": 344,
	"./ne": 345,
	"./ne.js": 345,
	"./nl": 346,
	"./nl-be": 347,
	"./nl-be.js": 347,
	"./nl.js": 346,
	"./nn": 348,
	"./nn.js": 348,
	"./pa-in": 349,
	"./pa-in.js": 349,
	"./pl": 350,
	"./pl.js": 350,
	"./pt": 351,
	"./pt-br": 352,
	"./pt-br.js": 352,
	"./pt.js": 351,
	"./ro": 353,
	"./ro.js": 353,
	"./ru": 354,
	"./ru.js": 354,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 356,
	"./se.js": 356,
	"./si": 357,
	"./si.js": 357,
	"./sk": 358,
	"./sk.js": 358,
	"./sl": 359,
	"./sl.js": 359,
	"./sq": 360,
	"./sq.js": 360,
	"./sr": 361,
	"./sr-cyrl": 362,
	"./sr-cyrl.js": 362,
	"./sr.js": 361,
	"./ss": 363,
	"./ss.js": 363,
	"./sv": 364,
	"./sv.js": 364,
	"./sw": 365,
	"./sw.js": 365,
	"./ta": 366,
	"./ta.js": 366,
	"./te": 367,
	"./te.js": 367,
	"./tet": 368,
	"./tet.js": 368,
	"./th": 369,
	"./th.js": 369,
	"./tl-ph": 370,
	"./tl-ph.js": 370,
	"./tlh": 371,
	"./tlh.js": 371,
	"./tr": 372,
	"./tr.js": 372,
	"./tzl": 373,
	"./tzl.js": 373,
	"./tzm": 374,
	"./tzm-latn": 375,
	"./tzm-latn.js": 375,
	"./tzm.js": 374,
	"./uk": 376,
	"./uk.js": 376,
	"./ur": 377,
	"./ur.js": 377,
	"./uz": 378,
	"./uz-latn": 379,
	"./uz-latn.js": 379,
	"./uz.js": 378,
	"./vi": 380,
	"./vi.js": 380,
	"./x-pseudo": 381,
	"./x-pseudo.js": 381,
	"./yo": 382,
	"./yo.js": 382,
	"./zh-cn": 383,
	"./zh-cn.js": 383,
	"./zh-hk": 384,
	"./zh-hk.js": 384,
	"./zh-tw": 385,
	"./zh-tw.js": 385
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 718;

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDealsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_user_deals_page_user_deals__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDealsDetailsPage = (function () {
    function UserDealsDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserDealsDetailsPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__page_user_deals_page_user_deals__["a" /* UserDealsPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    return UserDealsDetailsPage;
}());
UserDealsDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-deals-details',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-user-deals-details\page-user-deals-details.html"*/'<ion-content padding>\n\n  <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">\n\n\n\n  <div class="holder-store-details">\n\n    <p class="store-details-name">The Latest Scoop</p>\n\n    <p class="store-details-type">Cafe</p>\n\n    <p class="store-details-distance"><span class="fa fa-car"></span> 34 mi</p>\n\n  </div>\n\n\n\n  <ul class="holder-store-links">\n\n    <li><a href="#"><img src="assets/images/icon-phone.png" alt="">Call</a></li>\n\n    <li><a href="#"><img src="assets/images/icon-msg.png" alt="">Message</a></li>\n\n    <li><a href="#"><img src="assets/images/icon-heart.png" alt="">Favorite</a></li>\n\n    <li><a href="#"><img src="assets/images/icon-plane.png" alt="">Directions</a></li>\n\n    <li><a href="#"><img src="assets/images/icon-share.png" alt="">Share</a></li>\n\n  </ul>\n\n\n\n  <div class="holder-store-info">\n\n    <p class="store-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n\n    <p class="store-location"><img src="assets/images/icon-marker.png" alt="">2928 Granville Street, Vancouver</p>\n\n    <p class="store-hours"><img src="assets/images/icon-clock.png" alt="">Open today 8AM-12:30AM<span class="fa fa-angle-down"></span></p>\n\n  </div>\n\n\n\n  <div class="holder-store-deals">\n\n    <p class="deals-title">DEALS</p>\n\n    <ul>\n\n      <li>Buy 2 and get one free! <span>SCAN</span></li>\n\n      <li>Buy 7 and get one free! <span>SCAN</span></li>\n\n      <li>Buy 3 and get one free! <span>SCAN</span></li>\n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-user-deals-details\page-user-deals-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], UserDealsDetailsPage);

//# sourceMappingURL=page-user-deals-details.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_slider_page_slider__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_signup_success_page_signup_success__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_user_scanner_page_user_scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignupPage = (function () {
    function SignupPage(navCtrl, http, fb, gp) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.gp = gp;
        this.posts = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            permission: '4'
        };
    }
    SignupPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__page_slider_page_slider__["a" /* SliderPage */], {}, {
            animate: true,
            direction: 'back'
        });
    };
    SignupPage.prototype.fbConnect = function () {
        var _this = this;
        var baseUrl = __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].baseUrl;
        this.fb.login(['email', 'public_profile']).then(function (res) {
            _this.fb.api('me?fields=id,email', []).then(function (profile) {
                _this.http.post(baseUrl + 'api/users/login', { email: profile['email'], is_social: '1', permission: '4' }).subscribe(function (res) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */], {}, {
                        animate: true,
                        direction: 'forward'
                    });
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log('Error logging into Facebook', err);
        });
    };
    SignupPage.prototype.gpConnect = function () {
        this.gp.login({})
            .then(function (res) {
            return console.log(res);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__page_user_scanner_page_user_scanner__["a" /* UserScannerPage */], {}, {
            animate: true,
            direction: 'forward'
        })
            .catch(function (err) { return console.log('error -- ' + err); });
    };
    SignupPage.prototype.signMeUp = function () {
        var _this = this;
        var getFName = this.posts.first_name, getLName = this.posts.last_name, getUser = this.posts.username, getEmail = this.posts.email, getPass = this.posts.password, baseUrl = __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].baseUrl;
        var nameRegEx = /^(([A-Za-z]+[\-\']?)*([A-Za-z\s]+)?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/, userRegEx = /^[a-zA-Z0-9-_]+$/, emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (getFName) {
            if (nameRegEx.test(getFName) == false) {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="first_name"]').addClass('has-error').siblings('.text-validate').text('Invalid First name.');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="first_name"]').removeClass('has-error');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="first_name"]').addClass('has-error').siblings('.text-validate').text('First name is required.');
        }
        if (getLName) {
            if (nameRegEx.test(getLName) == false) {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="last_name"]').addClass('has-error').siblings('.text-validate').text('Invalid Last name.');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="last_name"]').removeClass('has-error');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="last_name"]').addClass('has-error').siblings('.text-validate').text('Last name is required.');
        }
        if (getUser) {
            if (userRegEx.test(getUser) == false) {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="username"]').addClass('has-error').siblings('.text-validate').text('Invalid Username');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="username"]').removeClass('has-error');
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="username"]').addClass('has-error').siblings('.text-validate').text('Username is required.');
        }
        if (getEmail) {
            if (emailRegEx.test(getEmail) == false) {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="email"]').addClass('has-error').siblings('.text-validate').text('Invalid Email address.');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="email"]').removeClass('has-error');
                if (!__WEBPACK_IMPORTED_MODULE_8_jquery__('.form-signup input').not('.form-signup input[name="email"]').hasClass('has-error')) {
                    this.http.post(baseUrl + 'api/users/add', this.posts).subscribe(function (res) {
                        console.log(res);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__page_signup_success_page_signup_success__["a" /* SignupSuccessPage */], {}, {
                            animate: true,
                            direction: 'forward'
                        });
                    }, function (err) {
                        console.log(err.json());
                        if (err.json().username == getUser) {
                            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="username"]').addClass('has-error').siblings('.text-validate').text('Username already exists');
                        }
                        if (err.json().email == getEmail) {
                            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="email"]').addClass('has-error').siblings('.text-validate').text('Email already exists.');
                        }
                        // console.log(err.json());
                    });
                }
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="email"]').addClass('has-error').siblings('.text-validate').text('Email address is required.');
        }
        if (getPass) {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="password"]').removeClass('has-error');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('input[name="password"]').addClass('has-error');
        }
        // if (!$('.form-signup input').hasClass('has-error')) {
        //   console.log('Success');
        //   this.http.post('' + baseUrl + 'api/users/add',this.posts).subscribe(res => {
        //     console.log(res);
        //     // this.navCtrl.setRoot(SignupSuccessPage, {}, {
        //     //   animate: true,
        //     //   direction: 'forward'
        //     // });
        //   }, err => {
        //     console.log(err);
        //   });
        // }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"E:\Projects\mobile-business-owner\src\pages\page-signup\page-signup.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.email }}</ion-card-header>\n\n  </ion-card>\n\n\n\n  <p class="title">\n\n    <img class="btn-nav" src="assets/icon/icon-back.png" alt="" (click)="goBack()">Sign Up\n\n  </p>\n\n  <button class="btn login-fb" (click)="fbConnect()"><span class="fa fa-facebook"></span> Continue with Facebook</button>\n\n  <button class="btn login-google" (click)="gpConnect()"><span class="fa fa-google"></span> Continue with Google</button>\n\n  <div class="divider">\n\n    <span>Or sign up with email</span>\n\n  </div>\n\n  <form class="form-signup">\n\n    <label>\n\n      <input type="text" name="first_name" placeholder="First name" [(ngModel)]="posts.first_name" />\n\n      <span class="text-validate">First name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="last_name" placeholder="Last name" [(ngModel)]="posts.last_name" />\n\n      <span class="text-validate">Last name is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="text" name="username" placeholder="Username" [(ngModel)]="posts.username" />\n\n      <span class="text-validate">Username is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="email" name="email" placeholder="Email address" [(ngModel)]="posts.email" />\n\n      <span class="text-validate">Email address is required.</span>\n\n    </label>\n\n    <label>\n\n      <input type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" [(ngModel)]="posts.password" />\n\n      <span class="btn-show">SHOW</span><span class="text-validate">Password is required.</span>\n\n    </label>\n\n    <input class="btn-green" type="submit" value="Sign Up" (click)="signMeUp()" />\n\n  </form>\n\n  <p class="description">By signing up, you agree to GoPage\'s <br><a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\mobile-business-owner\src\pages\page-signup\page-signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
], SignupPage);

//# sourceMappingURL=page-signup.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    baseUrl: 'https://warm-beach-10670.herokuapp.com/'
    // baseUrl : 'http://localhost:5015/'
};
/* harmony default export */ __webpack_exports__["a"] = (config);
//# sourceMappingURL=config.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.js.map