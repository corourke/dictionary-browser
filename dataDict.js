var app = angular.module('dataDictApp', []);
app.controller('dataDictCtrl', function($scope, $http) {
  
    var itemList = this;
    itemList.packages = [null];
    
    $http.get("data.json").
        success( function(json) {
            itemList = json;
        }
    );
    
    itemList.allPackages = function() {
        return itemList.packages;
    }
    
    itemList.factCount = function(package) {
      var count = 0;
      angular.forEach(package, function(facts) {
        count += 1;
      });
      return count;
    };
  });