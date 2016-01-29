var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
		//Default page
		.when("/", {
			templateUrl : "pages/homepage.html",
			controller : "homePageCtrl"
		})
		//about page
		.when("/about", {
			templateUrl : "pages/about.html",
			controller : "aboutCtrl"
		})
		//date page
		.when("/date", {
			templateUrl : "pages/date.html",
			controller : "dateCtrl"
		})
		.when("/comment", {
			templateUrl : "pages/comment.html",
			controller : "commentCtrl"
		});
});
app.controller("formValidation", ["$scope", function($scope){
	$scope.addComment = function(){
		if($scope.commentForm.$valid){
			$scope.notie.alert(1,"Your comment submitted successfully!!!", 2);
		}
	};
}]);