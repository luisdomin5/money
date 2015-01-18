'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('myApp.directives', []).
    directive('newTransaction', [function() {

        return {
            restrict: 'E',
            scope: {
                onAdd: '&add'
            },
            template: '<div><input type="date" ng-model="model.date"><input type="text" ng-model="model.name"><button ng-click="add($event)">Add</button></div>',
            link: function($scope, elm, attrs) {

                $scope.clear = function(){
                    $scope.model = {
                        date: null,
                        name: null
                    }
                };

                $scope.add = function(ev){
                    $scope.onAdd({ transaction: $scope.model});
                    $scope.clear();
                };

                $scope.clear();

            }
        };

    }]);
