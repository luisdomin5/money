'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

        var sampleCat = new classes.Category('sample category', [
            new classes.SubCategory('subcategory 1'),
            new classes.SubCategory('subcategory 2')
        ]);

        $scope.model = {
            categories : [sampleCat],
            transactions : [],
            isAdding: false
        };

        $scope.beginAddTransaction = function(ev){
            $scope.model.isAdding = true;
        }

        $scope.addTransaction = function(transaction){
            $scope.model.transactions.push(transaction);
            $scope.model.isAdding = false;
        }

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
