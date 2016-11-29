(function(){
  'use strict';
  angular.module('DIApp',[]).controller('DIController',DIController);
  DIController.$inject =['$scope','$filter'];

function DIController($scope,$filter){
    $scope.name="Yakoov";
    $scope.state="hungry";
    $scope.sayMessage=function()
    {
      return"Yakoov likes to eat";
    }
    // $scope.upper=function(){
    //   var upCase=$filter('uppercase');
    //   $scope.name=upCase($scope.name);
    // };


  $scope.feed = function()
  {
    $scope.state ="fed";
  };

}
})();
//minification
//!function(){"use strict";function e(e,n){e.name="Yakoov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
