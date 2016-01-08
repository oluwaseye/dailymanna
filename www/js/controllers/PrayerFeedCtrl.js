app.controller('PrayerFeedCtrl', function ($scope, $window, $rootScope, $ionicPlatform, $stateParams, ionicMaterialInk, $timeout, verseDayManager, socialSharingManager, $cordovaNetwork) {
    
     
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
   
      document.addEventListener("deviceready", function () {

        $scope.network = $cordovaNetwork.getNetwork();
        $scope.isOnline = $cordovaNetwork.isOnline();
        $scope.$apply();

        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            $scope.isOnline = true;
            $scope.network = $cordovaNetwork.getNetwork();

            $scope.$apply();
        })

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
            console.log("got offline");
            $scope.isOnline = false;
            $scope.dataLoading = false;
            $scope.network = $cordovaNetwork.getNetwork();

            $scope.$apply();
        })

  }, false);
 
    
    // eventListener for checking offline
//$window.document.addEventListener("offline", $rootScope.onOffline, false);
    
    
    /*  $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
     
      
          $rootScope.$apply(function(){
              if(networkState='none')
        $rootScope.online_state=false;
        $rootScope.offline_state=true;
        $rootScope.dataLoading = false;
          alert(networkState);
          });
    });
    
      
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      
    
         $rootScope.$apply(function(){
             if(networkState!='none')
                 alert(networkState);
    $rootScope.dataLoading = true;
    $rootScope.online_state=true;
    $rootScope.online_data=false;
    $rootScope.offline_state=false;
        
    //after 4 seconds    
      $timeout(function() {
    $rootScope.online_state=true;
    $rootScope.online_data=true;
    $rootScope.offline_state=false;
    $rootScope.dataLoading = false;
    }, 4000);
        
         });
    
        //alert(networkState);
      
    })
    
    
   */ 
    //console.log(networkManager);

    
      verseDayManager.then(function(response){
        
        $scope.data = response.data;
        
          
          //split after the dash
          $scope.stringArray = $scope.data.split('-');
          
          $scope.verse = $scope.stringArray[0];
          $scope.reference = $scope.stringArray[1];
          $scope.today = new Date();
          
    $scope.subject = '** Today\'s Daily Manna: ';
    
    
          
    $scope.dataLoading = true;
          
     }).finally(function () {
          
          $scope.dataLoading = false;
          
    //parse the data into the social sharing manager
         $scope.socialized = function (){
             socialSharingManager.socialize($scope.data, $scope.subject, 'null', 'https://goo.gl/7v7Q8w' );
         }
         
        
});
 
 

 
    

    
    
    
    
  
    
});
    