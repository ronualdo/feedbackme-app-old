'use strict';

angular.module('feedbackmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.message = '';
    $scope.showMessage = false;
    $scope.feedback = {
      feedbackText: '',
      author: ''
    };
    
    $scope.provideFeedback = function() {
      $http.post('http://f33dbackme.herokuapp.com/test_user/feedbacks', $scope.feedback)
        .success(function() {
          $scope.message = 'Feedback sent!';
          $scope.showMessage = true;
        })
        .error(function(error){
          $scope.message = error.message;
          $scope.showMessage = true;
        });

      $scope.feedback = {
        feedbackText: '',
        author: ''
      };
    };
  });
