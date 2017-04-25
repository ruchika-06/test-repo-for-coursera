                                     (function()
{

  'use strict';
    angular.module('NameCalculator',[])
    .controller('NameCalculatorController',function($scope)
     {
      $scope.name="";
      $scope.totalValue=0;
      //console.log($scope);

      $scope.displayNumeric = function()
       {
        var totalNameValue=calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      //  console.log($scope);
       };


      function calculateNumericForString(string)
      {
        var totalStringValue=0;
        for(var i=0;i<string.length;i++)
        {
          totalStringValue += string.charCodeAt(i);
        }


        return totalStringValue;


      };
  });

})();
