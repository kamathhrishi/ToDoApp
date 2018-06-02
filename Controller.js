

var myApp=angular.module('EventApp',[]);
myApp.controller('Eventcontrol',function($scope)
{

     $scope.tasks=[

        {order:1,action:'A',Priority:6},
        {order:2,action:'B',Priority:7},
        {order:3,action:'C',Priority:6},
        {order:4,action:'B',Priority:6},
        {order:5,action:'A',Priority:6}

     ];

     $scope.RemoveTask=function(task)
     {

          var taskindex=$scope.tasks.indexOf(task);
          $scope.tasks.splice(taskindex,1);

     }

});
