var app = angular.module('myModule', []);

app.controller('myController', function($scope){
//displayed array
$scope.btnItemsShown = [];

//prepopulated array?
$scope.words = ['jazz', 'music', 'edm', 'maybeMusic', 'pop', 'rock', 'moreJazz'];


//for selection - currently not working
$scope.selected = null;
$scope.select = function (index){
  $scope.selected = index;
};

$scope.clicked = function() {
    if ($scope.words) {
      $scope.toDoItems.push({taskName:$scope.masterList.taskName});
      $scope.masterList = '';
        //will clear out items
    }
  };


});
