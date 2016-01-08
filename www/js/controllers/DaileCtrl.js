app.controller('DaileCtrl', function ($scope, $window, $rootScope, $ionicPlatform,  $stateParams, ionicMaterialInk, notificationManager) {
    
    $ionicPlatform.ready(function () {
    
        
        //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

      $scope.mobile = "+13022021102,817624";
    $scope.callme = function(){
        
        window.plugins.CallNumber.callNumber(
             function(success) { /*alert('Dialing succeeded'); */}, 
             function(error) { /*alert('Dialing failed'); */}, 
            $scope.mobile, 
            true);
        
        
   
    }
    
    $scope.cancelAll = function() {notificationManager.cancelAllNotifications()};
   $scope.isNonDst = function() {notificationManager.isNonDstScheduledBtn()};
    $scope.isSch = function() {notificationManager.isScheduled("12032")};
    $scope.ptime = function() {notificationManager.notificationRegistration()};
        
        

/*$scope.$on("$cordovaLocalNotification:added", function("1234", state, json) {
    alert("Added a notification");
});*/
    
    
          

 
});
     
    
    
 });
    
