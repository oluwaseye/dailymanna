// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCordova','timer']);

app.run(function ($ionicPlatform, $cordovaToast, $cordovaLocalNotification, $cordovaVibration, $http, notificationManager ) {
    
    
    
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        
        
        //run the notification manager main
        notificationManager.notificationRegistration();
        //notificationManager.staticNotification();
        

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        
        
        
    });
});

/****************SERVICES********************/

//Notification Service/ Manager
app.service('notificationManager', function($cordovaLocalNotification){
    
    var self = this;
    
    //NOTFICATION METHOD
      this.notificationRegistration = function (){
        //calling from momentjs
          if(moment().isDST()) {
                // $window.localStorage.setItem('notification_dst', 'false');
             if( window.localStorage.getItem('notification_option')=='true'){
                  //if non-dst notification has been scheduled, do nothing
                  /*alert('DST notifications set already');*/
                     this.cancelAllNotifications();
                  this.scheduleNonDstNotifications();
            }else if(window.localStorage.getItem('notification_option')=='false')                  {
                  /*alert('DST notifications not set');*/
                this.cancelAllNotifications();
                }else{
                    //default setup
                    this.cancelAllNotifications();
                  this.scheduleNonDstNotifications();
                }
            
          }else{
             // $window.localStorage.setItem('notification_dst', 'false');
             if( window.localStorage.getItem('notification_option')=='true'){
                  //if non-dst notification has been scheduled, do nothing
                  /*alert('Non DST notifications set already');*/
                     this.cancelAllNotifications();
                  this.scheduleNonDstNotifications();
            }else if(window.localStorage.getItem('notification_option')=='false')                  {
                  /*alert('Non DST notifications not set');*/
                this.cancelAllNotifications();
                }else{
                    //default setup
                    this.cancelAllNotifications();
                  this.scheduleNonDstNotifications();
                }
              
          } 
          
          
     
      }
   
      
         
         
    this.isNonDstScheduledBtn = function() {
        $cordovaLocalNotification.isScheduled("12032").then(function(isScheduled) {
            if(isScheduled==true)alert('true');else alert('false');
        });
   };
    
    this.isScheduled = function () {
                window.cordova.plugins.notification.local.isScheduled(id, function (scheduled) {
                    alert(scheduled);
                });
            };
            
          
     this.cancelAllNotifications = function () {
      $cordovaLocalNotification.cancelAll().then(function (result) {
       
      });
    };
     
     

            //DST TIME NOTIFICATIONS
       this.scheduleDstNotifications = function () {
            this.nxtMonday = Date.parse('next monday').set({hour: 10}).setTimezoneOffset(0);
    this.nxtTuesday = Date.parse('next tuesday').set({hour: 10}).setTimezoneOffset(0);
    this.nxtWednesday = Date.parse('next wednesday').set({hour: 10}).setTimezoneOffset(0);
    this.nxtThursday = Date.parse('next thursday').set({hour: 10}).setTimezoneOffset(0);
    this.nxtFriday = Date.parse('next friday').set({hour: 10}).setTimezoneOffset(0);
          
    this.nxtSaturday = Date.parse('next saturday').set({hour: 12}).setTimezoneOffset(0);
          
    this.nxtSunday = Date.parse('next sunday').set({hour: 11}).setTimezoneOffset(0);
           
                  this.sound = device.platform == 'Android' ? 'file://sound/sound.mp3' : 'file://sound/beep.caf';
           
           /*this.icon = 'file://img/logo.png';*/
           this.icon = 'res://icon';
           
           this.smallicon = 'file://img/alarm.png';
           
      $cordovaLocalNotification.schedule([
        {
          id: 11029,
          title: 'It\'s a Happy Monday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtMonday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 11030,
          title: 'It\'s a Brand new Tuesday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtTuesday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 11031,
          title: 'It is Fantastic Wednesday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtWednesday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 11032,
          title: 'Oh! yes. Thursday is here',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtThursday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 11033,
          title: 'Thank God it\'s Friday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtFriday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 11034,
          title: 'Saturday is here',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtSaturday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 11035,
          title: 'Today is Sunday',
          message: 'Read and share the verse of the day.',
            firstAt: this.nxtSunday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        }
      ]);
    };
        
   
        
      
      //NON DST TIME NOTIFICATIONS
       
       this.scheduleNonDstNotifications = function () {
            this.nxtMonday = Date.parse('next monday').set({hour: 11}).setTimezoneOffset(0);
    this.nxtTuesday = Date.parse('next tuesday').set({hour: 11}).setTimezoneOffset(0);
    this.nxtWednesday = Date.parse('next wednesday').set({hour: 11}).setTimezoneOffset(0);
    this.nxtThursday = Date.parse('next thursday').set({hour: 11}).setTimezoneOffset(0);
    this.nxtFriday = Date.parse('next friday').set({hour: 11}).setTimezoneOffset(0);
          
    this.nxtSaturday = Date.parse('next saturday').set({hour: 13}).setTimezoneOffset(0);
          
    this.nxtSunday = Date.parse('next sunday').set({hour: 12}).setTimezoneOffset(0);
           
          this.sound = device.platform == 'Android' ? 'file://sound/sound.mp3' : 'file://sound/beep.caf';
           
           //this.icon = 'file://img/appicon.png';
           this.icon = 'res://icon';
           
           this.smallicon = 'file://img/alarm.png';
           
         
           
      
      $cordovaLocalNotification.schedule([
        {
          id: 12029,
          title: 'It\'s a Happy Monday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtMonday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
            
        },
        {
          id: 12030,
          title: 'It\'s a Brand new Tuesday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtTuesday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 12031,
          title: 'It is Fantastic Wednesday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtWednesday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 12032,
          title: 'Oh! yes. Thursday is here',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtThursday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 12033,
          title: 'Thank God it\'s Friday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtFriday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        },
        {
          id: 12034,
          title: 'Saturday is here',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtSaturday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
           icon: this.icon
        },
        {
          id: 12035,
          title: 'Today is Sunday',
          message: 'Read and share the verse of the day',
            firstAt: this.nxtSunday,
            every:'week',
            autoCancel: true,
            sound: this.sound,
            icon: this.icon
        }
      ]);
    };
    
    
    
  
     
     
    
    
});


//Toast Service. Messages
app.service('toastManager', function($cordovaToast){
   
     //DEFAULT TOAST MESSAGE
    this.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location).then(function(success) {
            console.log("The toast was shown");
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    }
    
    
     
    
});


//DAILY PRAYER FEED FACTORY

app.service('verseDayManager', function($http){
   
  
      return $http.get('http://www.ourmanna.com/verses/api/get/?format=text', { cache:false })
        .success( function (result){
        //console.log(result.data);
                
    })
    .error(function (data, status){
       //console.log(data); 
    });
    
 
    
});



// SOCIAL SHARING
app.service('socialSharingManager', function($cordovaSocialSharing, $ionicLoading){
    
    this.socialize = function (message, subject, file, link){
 
    $cordovaSocialSharing
    .share(message, subject, file, link) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
}
    
    this.socializer = function(){
        console.log('hi');
    }
    
});

//timeout service

app.service('waitManager', function($timeout){
   this.wait = function(method, time){
    $timeout(function() {
        method
    }, time); 
   }
});


app.filter('renderHTMLCorrectly', function($sce)
{
	return function(stringToParse)
	{
		return $sce.trustAsHtml(stringToParse);
	}
});

//network state service
/*app.service('networkManager', function($rootScope, $cordovaNetwork){
   
  var type = $cordovaNetwork.getNetwork();

    var isOnline = $cordovaNetwork.isOnline();

    var isOffline = $cordovaNetwork.isOffline();


    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
    });

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
    });
});*/

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
  
    .state('app.prayerfeed', {
        url: '/prayerfeed',
        views: {
            'menuContent': {
                templateUrl: 'templates/prayerfeed.html',
                controller: 'PrayerFeedCtrl'
            }
        }
    })
    


    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    })
    
    .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html',
                controller: 'SettingsCtrl'
            }
        }
    })
    
     .state('app.daile', {
        url: '/daile',
        views: {
            'menuContent': {
                templateUrl: 'templates/daile.html',
                controller: 'DaileCtrl'
            }
        }
    })
    
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/prayerfeed');
});
