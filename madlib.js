angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('word', directive);

function mainCtrl ($scope) {
  $scope.words = [];
  $scope.values = [];

  // Click listener for testing:
  $scope.onInputChange = function() {
    console.log($scope);
  }
}

var counter = 0;
function directive () {
  return {
    restrict: 'E',
    replace: 'true',
    template: template,
    link: link
  };

  function template($el, $attrs) {
    const idx = counter++;
    const type = $el.text();
    const init = 'type="'+type+'"';
    return "<span ng-init='"+init+"'>{{ values["+idx+"] || '__________' }}</span>"
  }

  function link ($scope, $attrs) {
    $scope.words.push($scope.type);
  }
}
