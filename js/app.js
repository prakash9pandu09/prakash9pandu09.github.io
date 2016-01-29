var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
		//Default page
		.when("/",{
			templateUrl : "pages/homepage.html",
			controller : "homePageCtrl"
		})
		//about page
		.when("/about",{
			templateUrl : "pages/about.html",
			controller : "aboutCtrl"
		})
		//date page
		.when("/date",{
			templateUrl : "pages/date.html",
			controller : "dateCtrl"
		});
});
app.controller("myCtrl", ["$scope", function($scope){
	$scope.home = "Hello there";
}])