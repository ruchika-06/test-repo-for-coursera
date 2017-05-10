(function()
{
  'use strict';
  angular.module('ShoppingApp',[]).controller('ShoppingAppController',ShoppingAppController).filter('costs',costssfilter);
  ShoppingAppController.$inject=['$scope','costfilter'];
  function ShoppingAppController($scope,costfilter)
{
  $scope.prodList=[];
  $scope.input="";
  $scope.cost=.56;
  $scope.addItem=function()
{
  var a=$scope.addMe;
  var items = $filter('uppercase')(a);
  $scope.prodList.push(items);

};
function customFilterFactory()
{
  return function(input)
  {
    input = replace("")
  }
}


});
})();
