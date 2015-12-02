'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('feedbackmeApp'));

  var MainCtrl,
    scope,
    httpBackend;

  var testUserFeedbackUrl = 'http://f33dbackme.herokuapp.com/test_user/feedbacks';

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    httpBackend = $httpBackend;
  }));

  it('should show a success message when able to provide new feedback', function() {
    var newFeedback = {
      feedbackText: 'my new feedback',
      author: 'author'
    };

    scope.feedback = newFeedback;
    httpBackend.expectPOST(testUserFeedbackUrl, newFeedback).respond('test');
    scope.provideFeedback();
    httpBackend.flush();
    expect(scope.message).toContain('sent');
  });

  it('should inform when feedbackText validation fail', function(){
    var feedbackTextless = {
      author: 'author'
    };

    scope.feedback = feedbackTextless;
    httpBackend.expectPOST(testUserFeedbackUrl, feedbackTextless)
      .respond(401, {field: 'feedbackText', message: 'feedbackText not null'});
    

    scope.provideFeedback();
    
    httpBackend.flush();

    expect(scope.message).toContain('feedbackText not null');
  });
});
