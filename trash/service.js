var app=angular.module("AssetWorxApp",[]);
app.service("assetService",function($http,$q)
{
  var deferred=$q.defer();
  $http.get('AssetWorx/asset.json').then(function(data))
  {
    deferred.resolve(data);
  });
  this.getPlayers=function()
  {
    return deferred.promise;
  }
})
.controller("assetCtrl",function($scope,service){
  var promise=service.getPlayer();
  promise.then(function(data))
  {
    $scope.team=data;
    console.log($scope.team);
  })
})
