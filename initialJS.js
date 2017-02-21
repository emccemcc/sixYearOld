var app = angular.module('myModule', []);

app.controller('myController', function($scope){
//displayed array
$scope.btnItemsShown = [];

//prepopulated array?
$scope.words = ['jazz', 'music', 'edm', 'maybeMusic', 'pop', 'rock', 'moreJazz'];




$scope.submit = function(index) {
      for (var i = 0; i < words.length; i++){
        i = index;
      $scope.btnItemsShown.push($scope.words[index]);
      console.log(index);
      console.log($scope.words[index]);
    };

  };


});
