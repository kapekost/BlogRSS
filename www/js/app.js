// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);


      var admobid = {};
      if( /(android)/i.test(navigator.userAgent) ) { // for android
        admobid = {
          banner: 'ca-app-pub-7450043708652102/7660551276', // or DFP format "/6253334/dfp_example_ad"

        };
      } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
          banner: 'ca-app-pub-7450043708652102/7660551276', // or DFP format "/6253334/dfp_example_ad"
          //  interstitial: 'ca-app-pub-xxx/kkk'
        };
      } else { // for windows phone
        admobid = {
          banner: 'ca-app-pub-7450043708652102/7660551276', // or DFP format "/6253334/dfp_example_ad"
          // interstitial: 'ca-app-pub-xxx/kkk'
        };
      }


      if(AdMob) AdMob.createBanner( {
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true } );







      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }}

  });
})

.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider) {

      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://ajax.googleapis.com//**']);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
