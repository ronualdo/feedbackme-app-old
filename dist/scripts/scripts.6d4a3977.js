"use strict";angular.module("feedbackmeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("feedbackmeApp").controller("MainCtrl",["$scope","$http",function(a,b){a.message="",a.showMessage=!1,a.feedback={feedbackText:"",author:""},a.provideFeedback=function(){b.post("http://f33dbackme.herokuapp.com/test_user/feedbacks",a.feedback).success(function(){a.message="Feedback sent!",a.showMessage=!0}).error(function(b){a.message=b.message,a.showMessage=!0}),a.feedback={feedbackText:"",author:""}}}]),angular.module("feedbackmeApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("feedbackmeAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>Feedback</h1> <div class="alert alert-success" ng-show="showMessage"> <strong>Done!</strong> {{message}} </div> <form ng-submit="provideFeedback()"> <input type="text" ng-model="feedback.feedbackText"> <input type="text" ng-model="feedback.author"> <input type="submit"> </form> </div>')}]);