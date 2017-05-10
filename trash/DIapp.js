(function(){
  'use strict';
  angular.module('DIApp',[]).controller('DIController',DIController).filter('loves',LovesFilter).filter('truth',truthsFilter);
  DIController.$inject =['$scope','lovesFilter'];

function DIController($scope,lovesFilter){
    $scope.name="Yakoov";
    $scope.state="hungry";
    $scope.msg="yakoov likes to eat";
    $scope.sayMessage=function()
    {

      return"Yakoov likes to eat";
    };
     $scope.sayLovesMessage = function()
     {

    // var  msg="Yakoov likes to eat";
          msg=LovesFilter("yakov likes to eat");
     return msg;
    //
   };
    // $scope.upper=function(){
    //   var upCase=$filter('uppercase');
    //   $scope.name=upCase($scope.name);
    // };
    $scope.feed = function()
    {
      $scope.state ="fed";
    };

}
function truthsFilter()
{
  return function(input,target,replace)
  {
    input=input.replace(target,replace);
    return input;
  }
}

  function LovesFilter()
  {
    return function (input)
    {
      input =input ||"";
      input = input.replace("likes","loves");
     return input;
   }
  }


})();
//minification
//!function(){"use strict";function e(e,n){e.name="Yakoov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
