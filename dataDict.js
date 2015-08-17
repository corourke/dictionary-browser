var app = angular.module('dataDictApp', []);
app.controller('dataDictCtrl', function() {
  
    var itemList = this;
    
    itemList.items = [
      {name:'Purchasing Analytics', done:true},
      {name:'Recievables Analytics', done:true},
      {name:'General Ledger Analytics', done:false} ];

 
    itemList.itemCount = function() {
      var count = 0;
      angular.forEach(itemList.items, function(item) {
        count += 1;
      });
      return count;
    };
  });