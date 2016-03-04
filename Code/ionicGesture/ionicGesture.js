angular.module('bonuspoint').controller('TestCtrl', TestCtrl);

function TestCtrl($scope, $reactive, $state, $stateParams, $ionicLoading, $ionicPopup, $log, 
	$cordovaBarcodeScanner, $ionicGesture, $timeout, History) {	

	var x, y;
	$scope.data = {
	    swipe : 0,
	    swiperight: 0,
	    swipeleft: 0,
	    tap : 0,
	    doubletap : 0,
	    drag: 0
	    // scroll : 0
	  };

	  $scope.draggedStyle = {};

	  $scope.reportEvent = function(event)  {
	  	console.log(event)
	    console.log('Reporting : ' + event.type);

	    x = event.gesture.center.pageX - 50;
	    y = event.gesture.center.pageY - 300;

	    $scope.draggedStyle = {
		    "transform": "translate(" + x + "px, " + y + "px)",
		    "-webkit-transform": "translate(" + x + "px, " + y + "px)"
		};

		console.log($scope.draggedStyle);
			    
	    $timeout(function() {
	      $scope.data[event.type]++;
	    })
	  }
}