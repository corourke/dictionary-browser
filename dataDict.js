var app = angular.module('dataDictApp', []);
app.controller('dataDictCtrl', function($scope, $http) {
  
    var itemList = this;
    itemList.items = [null];
    
    $http.get("data.json").
        success( function(data) {
            itemList = data;
            console.log(JSON.stringify(itemList));
        }
    );
    
    itemList.allItems = function() {
        return itemList.items;
    }
    
    itemList.itemCount = function() {
      var count = 0;
      angular.forEach(itemList.items, function(item) {
        count += 1;
      });
      return count;
    };
  });