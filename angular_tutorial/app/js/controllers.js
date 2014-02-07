'use strict';

/* Controllers */

var bearApp = angular.module('bearApp', []);

bearApp.controller('BearListCtrl', function($scope){
  $scope.bears = [
    { "id": 1,
      "name": "Polar Bear",
      "type": "polar"},
    { "id": 2,
      "name": "Grizzly Bear",
      "type": "grizzly"},
    { "id": 3,
      "name": "Panda Bear",
      "type": "panda"},
    { "id": 4,
      "name": "Black Bear",
      "type": "black"}
  ]
});

// var phonecatControllers = angular.module('phonecatControllers', []);

// phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     }
//   }]);
