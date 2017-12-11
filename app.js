var app = angular.module('gochu', ['ngRoute'])
.config(function($routeProvider){
$routeProvider
.when('/home', {
  templateUrl: 'partials/home.html',
  controller: 'layoutsController'
})
// .when('/aboutUs', {
//   templateUrl: 'partials/aboutUs.html'
// })
// .when('/contactUs', {
//   templateUrl: 'partials/contactUs.html'
// })
// .when('/market_trends', {
//   templateUrl: 'partials/market_trends.html',
//   controller: 'market_trendsController'
// })
// .when('/listings', {
//   templateUrl: 'partials/listings.html',
//   controller: 'listingsController'
// })
// .when('/purchase_process', {
//   templateUrl: 'partials/purchase_process.html'
// })
// .when('/loans', {
//   templateUrl: 'partials/loans.html'
// })


})
