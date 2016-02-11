var app = angular.module("app", ["ngRoute", "ngAnimate"]);
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
		//talks page
		.when("/talks", {
			templateUrl : "pages/talks.html",
			controller : "talksCtrl"
		})
		//projects 
		.when("/projects", {
			templateUrl : "pages/projects.html",
			controller : "projectsCtrl"
		})
		//contacts page
		.when("/contacts", {
			templateUrl : "pages/contacts.html",
			controller : "contactsCtrl"
		})
	.otherwise({
		redirectTo : "/"
	});
});
/*app.controller("formValidation", ["$scope", function($scope){
	$scope.posts = [
		{name: "Jyothi Praksh",
		email: "prakash9pandu09@gmail.com",
		comment: "You are awesome man..." }
	];
	$scope.addComment = function(){
		if($scope.commentForm.$valid){
			$scope.posts.push({
				name: $scope.name,
				email: $scope.email,
				comment: $scope.comment
			});
			$scope.name = '';
			$scope.email = '';
			$scope.comment = '';
		}
	};
}]); */