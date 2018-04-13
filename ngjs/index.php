 <!DOCTYPE html>
<html lang="en-US">
<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> -->
<script src="angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl" ng-init="def=0">
  <p>Satu  : <input type="number" ng-model="satu" ng-change="myFunc()"></p>
  <p>Dua   : <input type="number" ng-model="dua" ng-change="myFunc()"><input type="number" ng-model="duaout" ng-bind="def" ng-change="myFunc()"></p>
  <p>Tiga  : <input type="number" ng-model="tiga" ng-change="myFunc()"><input type="number" ng-model="tigaout" ng-change="myFunc()"></p>
  <p>Empat : <input type="number" ng-model="empat" ng-change="myFunc()"><input type="number" ng-model="empatout" ng-change="myFunc()"></p>
  <p>Lima  : <input type="number" ng-model="lima" ng-change="myFunc()"><input type="number" ng-model="limaout" ng-change="myFunc()"></p>
  <!-- <h1><br>Full Name: {{satu+dua+tiga+empat+lima}}</h1> -->
  <h1><br>In: {{ttotal}}</h1>
  <h1><br>Total: {{total}}</h1>
</div>
<script>
var app = angular.module('myApp', []);
var max = 180;
app.controller('myCtrl', function($scope) {
	$scope.satu = 0;
    $scope.dua = 0;
    $scope.tiga = 0;
    $scope.empat = 0;
    $scope.lima = 0;

    $scope.duaout = 0;
    $scope.tigaout = 0;
    $scope.empatout = 0;
    $scope.limaout = 0;


	$scope.myFunc = function(){
    var ctotal = $scope.satu + $scope.dua - $scope.duaout + $scope.tiga - $scope.tigaout + $scope.empat - $scope.empatout + $scope.lima - $scope.limaout;
    $scope.ttotal = ctotal;
    if (ctotal <= max) {
    	$scope.total = "available for "+ (max - ctotal);
    }else{
    	$scope.total = "not available "+ (max - ctotal);
    }
	}
});
</script>
</body>
</html> 