app.controller("homePageCtrl", ["$scope", function($scope){
	$scope.homepage = "Homepage";
}]);
app.controller("aboutCtrl", ["$scope", function($scope){
	$scope.about = "Tell me about yourself";
}]);
app.controller("dateCtrl", ["$scope", function($scope){
	$scope.date = new Date();
}]);