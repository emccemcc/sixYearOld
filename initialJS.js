var app = angular.module('myModule', []);

app.controller('myController', function($scope){
//displayed array
$scope.btnItemsShown = [];

//prepopulated array?
$scope.words = ['jazz', 'music', 'edm', 'maybeMusic', 'pop', 'rock', 'moreJazz', 'moreJazz1', 'moreJazz2', 'moreJazz3','moreJazz4'];
var indexWord = 0;
var indexWordRandom = 0;

$scope.submit = function() {
      $scope.btnItemsShown.push($scope.words[indexWord]);
      indexWord++;
      console.log(indexWord);
      console.log($scope.words[indexWord]);
  };

  $scope.submitWordRandom = function() {
        indexWordRandom = Math.round(Math.random() * 10);
        $scope.btnItemsShown.push($scope.words[indexWordRandom]);
        console.log(indexWordRandom);
        console.log($scope.words[indexWordRandom]);
    };




});
