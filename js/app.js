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
	$scope.posts = [];
	$scope.addComment = function(){
		if($scope.commentForm.$valid){
			$scope.posts.push({
				name: $scope.name,
				email: $scope.email,
				comment: $scope.comment
			});
			//alert('Your comment submitted successfully!');
		}
	};
}]);