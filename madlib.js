angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', madlibDirective);

function mainCtrl ($scope) {
  $scope.words = ["Noun","Preposition","Verb","Noun"];
  $scope.values = [];

  // Click listener for testing:
  $scope.click = function() {
    console.log($scope);
  }
}

function madlibDirective () {
  return {
    scope: {

    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<form class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
	'<h4>{{user.email}}</h4>' +
      '</div>'
    ), /* [3] */
    link: link
  };

  function link (scope) { /* [4] */
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
    }
    if(!scope.user.name){scope.user.name="No Name Provided";}
    if(!scope.user.email){scope.user.email="No Email Provided";}
  }


}
