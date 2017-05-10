var assetControllers = angular.module('assetControllers', ['ngAnimate']);

assetControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.assets = data;
    $scope.assetOrder = 'name';
  });
}]);

assetControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.assets = data.rows;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.assets.length-1;
    }

    if ($routeParams.itemId < $scope.assets.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  }

  });
}]);
