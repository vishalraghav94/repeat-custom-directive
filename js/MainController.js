/**
 * Created by apple on 07/07/17.
 */
var myApp = angular.module('vrRepeat', []);
myApp.controller('myController', ['$scope','$interval', '$compile', '$timeout', function ($scope, $interval, $compile, $timeout) {
    //console.log($scope.pattern);
    //console.log("hello");
    $scope.pattern = ['hello', 'are', 'you', 'i', 'am', 'fine'];
    $scope.persons = ['ayushi', 'vishal', 'raghav', 'sushant'];
    $scope.details = [{
        fname: 'ayushi',
        lname: 'Mittal'
    }];
    $timeout(function () {
        $scope.pattern.push("etc");
        console.log('hi');
    }, 3000);
   // $scope.pattern = "";
}]);