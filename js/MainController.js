/**
 * Created by apple on 07/07/17.
 */
var myApp = angular.module('vrRepeat', []);
myApp.controller('myController', ['$scope','$interval', function ($scope, $interval) {
    //console.log($scope.pattern);
    //console.log("hello");
    $scope.pattern = ['hello', 'are', 'you', 'i', 'am', 'fine'];

   // $scope.pattern = "";
}]);