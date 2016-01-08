app.controller('SettingsCtrl', function ($scope, $stateParams, ionicMaterialInk, $log, $window, $cordovaToast, $cordovaLocalNotification, toastManager,  notificationManager) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
    
   
    /***********SETTINGS AREA CODE *****/
    //SET DEFAULTS
    if(!$window.localStorage.getItem('notification_option')){
        $window.localStorage.setItem('notification_option', 'true');
    }
    
   
   
/***********NOTIFICATION OPTION *****/
  $scope.toggle_notify = $window.localStorage.getItem('notification_option') === 'true';
    $scope.updateNotificationOption = function() {
        $window.localStorage.setItem('notification_option', $scope.toggle_notify);
        if($window.localStorage.getItem('notification_option')=='false'){
            //run the notification cancelation method
            notificationManager.cancelAllNotifications();
            //display toast message
            toastManager.showToast('You will no receive notifications', 'long', 'bottom'); 
        }else{
            //run the notification registration
            notificationManager.notificationRegistration();
            //display toast message
         toastManager.showToast('You can now receive notifications', 'long', 'bottom');         
        }
        $log.info($scope.toggle_notify);
        //message condition
        
    };

    
 
    
  
});

