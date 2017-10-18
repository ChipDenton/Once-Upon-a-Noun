angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('noun', nounDirective);

function mainCtrl ($scope) {
  $scope.words = ["Noun","Preposition","Verb","Noun"];
  $scope.values = [];

  // Click listener for testing:
  $scope.onInputChange = function() {

  }
}

function nounDirective () {
  return {
    restrict: 'E',
    replace: 'true',
    template: function() {
      console.log("template", arguments);
      return "<p>Bagels are good</p>"
    }, /* [3] */
    link: link
  };

  function link (scope) { /* [4] */
    console.log("link", arguments);
  }

}
